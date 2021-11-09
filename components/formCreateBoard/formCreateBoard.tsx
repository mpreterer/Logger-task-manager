import { Card, CardContent, TextField, FormControl, RadioGroup, Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import React from 'react';

import RootStore from '../../store/RootStore';
import ICreateBoard from '../../utils/interfaces/ICreateBoard';
import BoardColor from '../boardColor';

import styles from './formCreateBoard.module.css';

type props = {
  defaultColor?: string;
};

class FormCreateBoard extends React.Component<props> {
  private boardName: string;
  private boardDesc: string;
  private boardColor: { value: string };
  private formRef: React.RefObject<any>;
  private successfullCreactionBoxRef: React.RefObject<any>;
  private successfullMessageRef: React.RefObject<any>;

  constructor(props: props) {
    super(props);

    this.boardName = '';
    this.boardDesc = '';
    this.boardColor = { value: props.defaultColor || 'blue' };
    this.formRef = React.createRef();
    this.successfullCreactionBoxRef = React.createRef();
    this.successfullMessageRef = React.createRef();
  }

  private hideCreateBoardForm() {
    this.formRef.current.style.display = 'none';
  }

  private showSuccessfulCreationBox() {
    this.hideCreateBoardForm();
    this.successfullMessageRef.current.innerHTML = `My board "${this.boardName}" was created!`;
    this.successfullCreactionBoxRef.current.style.display = 'flex';
  }

  private handleChangeColor(event: React.ChangeEvent) {
    this.boardColor.value = event.currentTarget.value;
  }

  private handleChangeBoardName(event: React.ChangeEvent) {
    this.boardName = event.currentTarget.value;
  }

  private handleChangeBoardDesc(event: React.ChangeEvent) {
    this.boardDesc = event.currentTarget.value;
  }

  private fetchData(board: Partial<ICreateBoard>) {
    const { boards } = RootStore;

    boards
      .createBoard(board)
      .then(() => {
        this.showSuccessfulCreationBox();
        console.log(this.boardName);
      })
      .catch((e) => {
        console.log(e);
        router.push('/error');
      });
  }

  private checkData() {
    const { boardName, boardDesc, boardColor } = this;
    const isValidValue = (value: string): boolean => {
      const isValueEmpty = value === '';
      const isValueNull = value === null;
      const isValueUndefined = value === undefined;

      if (!isValueUndefined && !isValueNull && !isValueEmpty) {
        return true;
      }

      return false;
    };
    const isBoardName = isValidValue(boardName);

    if (isBoardName) {
      this.fetchData({
        name: boardName,
        desc: boardDesc,
        prefs_background: boardColor.value,
      });
    }
  }

  render() {
    const colors = [
      { value: 'blue', color: '#0079BF' },
      { value: 'green', color: '#519839' },
      { value: 'purple', color: '#88629E' },
      { value: 'pink', color: '#CD5A91' },
      { value: 'grey', color: '#838C91' },
      { value: 'sky', color: '#00AECC' },
      { value: 'lime', color: '#4BBF6B' },
      { value: 'orange', color: '#D29034' },
      { value: 'red', color: '#B04632' },
    ];

    return (
      <div className={styles.formCreateBoard}>
        <Card variant="outlined" ref={this.formRef} className={styles.formCreateBoard__form}>
          <CardContent>
            <TextField
              label="Name"
              placeholder="Board Name"
              fullWidth={true}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="info"
              inputProps={{ maxLength: 512 }}
              onChange={(e) => this.handleChangeBoardName(e)}
              className={styles.formCreateBoard__name}
            />
            <TextField
              label="Description"
              placeholder="Board Description"
              multiline={true}
              rows={3}
              fullWidth={true}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="info"
              inputProps={{ maxLength: 16384 }}
              onChange={(e) => this.handleChangeBoardDesc(e)}
              className={styles.formCreateBoard__desc}
            />
            <FormControl component="fieldset">
              <RadioGroup
                defaultValue={this.boardColor.value}
                name="board-color"
                row={true}
                onChange={(e) => this.handleChangeColor(e)}
                className={styles.formCreateBoard__colors}
              >
                {colors.map((item) => (
                  <BoardColor key={item.value} value={item.value} color={item.color} />
                ))}
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              onClick={this.checkData.bind(this)}
              className={styles['formCreateBoard__create-btn']}
            >
              create
            </Button>
          </CardContent>
        </Card>
        <div ref={this.successfullCreactionBoxRef} className={styles.formCreateBoard__successfull}>
          <span
            ref={this.successfullMessageRef}
            className={styles['formCreateBoard__successfull-message']}
          ></span>
          <Link href="/boards">
            <Button variant="contained" className={styles['formCreateBoard__boards-btn']}>
              Go to my boards
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default FormCreateBoard;
