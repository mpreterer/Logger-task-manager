import React from 'react';

import RootStore from '../../../store/RootStore';
import styles from './columnTextArea.module.css';
import ButtonRemoveList from '../../buttonRemoveList/buttonRemoveList';

type props = {
  listID: string;
  title: string;
};

class ColumnTextArea extends React.Component<props> {
  private title: string;
  private listID: string;
  private componentRef: React.RefObject<any>;

  constructor(props: props) {
    super(props);
    this.title = props.title;
    this.listID = props.listID;
    this.componentRef = React.createRef();
  }

  // При первом рендере настраиваем высоту textArea
  componentDidMount() {
    const node = this.componentRef.current;

    this.setScrollHeight(node);
  }

  // Меняет высоту textArea в зависимости от величины контента
  private setScrollHeight(element: HTMLTextAreaElement) {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }

  // Обновляет название листа на стороне Trello
  private fetchData(value: string) {
    const isTitleChanged = value != this.title;
    const isValue = value != null && value != undefined && value != '';

    if (isTitleChanged && isValue) {
      const { boards } = RootStore;

      boards
        .updateList(this.listID, { name: value })
        .then((res) => {
          const { name } = res.data;

          if (name) {
            this.title = name;
            console.log('PUT List name changed successfully!');
          }
        })
        .catch((e) => console.log(e));
    }
  }

  // Обновляет высоту textArea и обрабатывает нажатие Enter
  private checkInput(event: React.KeyboardEvent<any>) {
    const { currentTarget } = event;

    this.setScrollHeight(currentTarget);

    // При Enter делает расфокус textArea
    if (event.key == 'Enter') {
      event.preventDefault();
      event.currentTarget.blur();
    }
  }

  // При расфокусе textArea, вызывает обновление названия
  private checkBlur(event: React.FocusEvent) {
    const focusoutElement = event.currentTarget;
    const { value } = focusoutElement;
    const isValue = value != null && value != undefined && value != '';

    if (isValue) {
      this.fetchData(value);
    } else {
      focusoutElement.value = this.title;
    }
  }

  private async handleRemoveList() {
    const { boards } = RootStore;

    if (boards.activeBoard?.lists?.length === 1) {
      const result = confirm(
        `If you will remove this list, this board will be remove. Are you sure?`,
      );
      if (result) {
        await boards.removeList(this.listID);
        window.history.back();
      }
    }

    const result = confirm(`Remove List "${this.title}" ?`);

    if (result) {
      await boards.removeList(this.listID);
      window.location.reload();
    }
  }

  render() {
    return (
      <form style={{ display: 'flex' }}>
        <textarea
          defaultValue={this.title}
          rows={1}
          maxLength={512}
          className={styles.columnTextArea}
          onKeyPress={(e) => this.checkInput(e)}
          onBlur={(e) => this.checkBlur(e)}
          ref={this.componentRef}
        ></textarea>
        <ButtonRemoveList onClick={() => this.handleRemoveList()} />
      </form>
    );
  }
}

export default ColumnTextArea;
