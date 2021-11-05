import React from 'react';
import { Button } from '@mui/material';

import styles from './buttonNewColumn.module.css';
import RootStore from '../../store/RootStore';

type props = {
  idBoard: string;
};

class ButtonNewColumn extends React.Component<props> {
  private formRef: React.RefObject<any>;
  private buttonRef: React.RefObject<any>;
  private textAreaRef: React.RefObject<any>;
  private idBoard: string;

  constructor(props: props) {
    super(props);

    this.idBoard = props.idBoard;
    this.buttonRef = React.createRef();
    this.formRef = React.createRef();
    this.textAreaRef = React.createRef();
  }

  // Меняет высоту textArea в зависимости от величины контента
  private setScrollHeight() {
    this.textAreaRef.current.style.height = '5px';
    this.textAreaRef.current.style.height = this.textAreaRef.current.scrollHeight + 'px';
  }

  // При Enter делает расфокус textArea
  private checkTextArea(event: React.KeyboardEvent<any>) {
    if (event.key == 'Enter') {
      event.preventDefault();
      event.currentTarget.blur();
    }
  }

  private hideButton() {
    this.buttonRef.current.style.display = 'none';
  }

  private showButton() {
    this.buttonRef.current.style.display = 'flex';
  }

  private hideForm() {
    this.formRef.current.style.display = 'none';
    this.textAreaRef.current.value = null;
    this.setScrollHeight();
    this.showButton();
  }

  private showForm() {
    this.hideButton();
    this.formRef.current.style.display = 'block';
  }

  // Создает новый лист на стороне Trello
  private fetchData(value: string) {
    const isValue = value != null && value != undefined && value != '';

    if (isValue) {
      const { boards } = RootStore;

      boards.createList({
        idBoard: this.idBoard,
        name: value,
      });
    }
  }

  private checkTextAreaValue(event: React.FormEvent) {
    event.preventDefault();

    const { value } = this.textAreaRef.current;
    const isValue = value != null && value != undefined && value != '';

    if (isValue) {
      this.fetchData(value);
    }

    this.hideForm();
  }

  render() {
    return (
      <div className={styles.buttonNewColumn}>
        <Button
          variant="contained"
          className={styles.buttonNewColumn__button}
          ref={this.buttonRef}
          onClick={this.showForm.bind(this)}
        >
          <span className={styles.buttonNewColumn__plus}>+</span>
          Create new column
        </Button>
        <form
          ref={this.formRef}
          className={styles.buttonNewColumn__form}
          onSubmit={(e) => this.checkTextAreaValue(e)}
        >
          <textarea
            rows={1}
            maxLength={512}
            ref={this.textAreaRef}
            placeholder="Enter the title of the column"
            className={styles.buttonNewColumn__textArea}
            onKeyPress={(e) => this.checkTextArea(e)}
            onChange={this.setScrollHeight.bind(this)}
          ></textarea>
          <div className={styles.buttonNewColumn__formController}>
            <Button variant="contained" type="submit" className={styles.buttonNewColumn__submit}>
              Add column
            </Button>
            <span className={styles.buttonNewColumn__cancel} onClick={this.hideForm.bind(this)}>
              +
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default ButtonNewColumn;
