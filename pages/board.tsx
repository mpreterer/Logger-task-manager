import { observer } from "mobx-react";
import router from "next/router";
import { useEffect, useState } from "react";
import useStore from "../hooks/useStore";

function Board() {

  const { boards } = useStore();
  const [id, setID] = useState("");

  // Получаем boardID из url
  useEffect(() => {
    const id = router.query.id;
    const isID = id !== undefined;
    if (isID) setID(id)
  })

  return <div style={{color: 'lightsteelblue'}}>
    {boards.boards?.filter(board => board.id === id)
      .map(board => {
        return <div key={board.id}>
          Название: {board.name}<br/><br/>
          Описание: {board.desc}<br/><br/>
          Мемберы: {board.members?.map(member => {
            return <div key={member.id}> {member.fullName}<br/><img src={member.avatarUrl+"/170.png"}></img></div>
          })}<br/><br/>
          Дашбоард: {board.lists?.map(list => {
            return <div key={list.id}>
              ======== КОЛОНКА ({list.name}) ========<br/>
              {list.cards?.map(card => {
                return <div key={card.id}>--- карточка - {card.name}</div>
              })}
            </div>
          })}
      </div>
  })}</div>;
}

export default observer(Board);