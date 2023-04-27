import { Button } from '@mui/material';
import React from 'react';

import RootStore from '../../store/RootStore';

import styles from './buttonNewCard.module.css';

type props = {
  idList: string;
};

class ButtonNewCard extends React.Component<props> {
  private idList: string;
  private buttonRef: React.RefObject<any>;
  private formRef: React.RefObject<any>;
  private textAreaRef: React.RefObject<any>;

  constructor(props: props) {
    super(props);

    this.idList = props.idList;
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
  private async fetchData(value: string) {
    const isValue = value != null && value != undefined && value != '';

    if (isValue) {
      const { boards } = RootStore;

      await boards.createCard({
        idList: this.idList,
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
      <div className={styles.buttonNewCard}>
        <div
          className={styles.buttonNewCard__button}
          ref={this.buttonRef}
          onClick={this.showForm.bind(this)}
        >
          + Add new card
        </div>
        <form
          className={styles.buttonNewCard__form}
          ref={this.formRef}
          onSubmit={(e) => this.checkTextAreaValue(e)}
        >
          <textarea
            className={styles.buttonNewCard__textArea}
            rows={1}
            ref={this.textAreaRef}
            maxLength={250}
            placeholder="Enter the title of the card"
            onKeyPress={(e) => this.checkTextArea(e)}
            onChange={this.setScrollHeight.bind(this)}
          ></textarea>
          <div className={styles.buttonNewCard__formController}>
            <Button className={styles.buttonNewCard__submit} variant="contained" type="submit">
              Add new card
            </Button>
            <span className={styles.buttonNewCard__cancel} onClick={this.hideForm.bind(this)}>
              +
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default ButtonNewCard;
