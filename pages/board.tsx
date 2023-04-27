import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ButtonNewColumn from '../components/buttonNewColumn/buttonNewColumn';
import ColumnCard from '../components/columnCard/columnCard';
import useStore from '../hooks/useStore';
import { useAuth } from '../services/AuthProvider';

const Board = observer(() => {
  const isLoginIn = useAuth();
  const router = useRouter();
  const { boards } = useStore();

  if (boards.activeBoard?.prefs.backgroundColor) {
    document.body.style.backgroundColor = boards.activeBoard?.prefs.backgroundColor;
  }

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;

    if (id) {
      boards.getActiveBoard(`${id}`);
    }

    return function clearActiveBoard() {
      boards.clearActiveBoard();
    };
  }, [router.isReady]);

  const [count, setCount] = useState(0);

  // временное решение из-за бага в BoardStore createCard
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;
    const dragInSingleList = destination?.droppableId === source.droppableId;
    const isIdenticalIndexes = destination?.index === source.index;

    if (!destination) return; // Если нет окончательного места
    if (dragInSingleList && isIdenticalIndexes) return; // Если карточка не сдвинулась

    // Исходный лист
    const [sourceList] =
      boards.activeBoard?.lists?.filter((list) => list.id === source.droppableId) || [];
    // Окончательный лист
    const [destinationList] =
      boards.activeBoard?.lists?.filter((list) => list.id === destination.droppableId) || [];

    const sourceCards = sourceList.actions;
    const destinationCards = destinationList.actions;

    // Передвигаемая карточка
    const [draggableCard] = sourceCards?.filter((card) => card.id === draggableId) || [];

    // Удаляем карточку из исходного листа
    sourceCards?.splice(source.index, 1);

    // Меняет индекс карточки в листе
    if (dragInSingleList) {
      sourceCards?.splice(destination.index, 0, draggableCard);
    }

    // Добавляем карточку в окончательный лист с индексом
    if (!dragInSingleList) {
      destinationCards?.splice(destination.index, 0, draggableCard);
    }

    boards.updateCardPosition(draggableId, destination.droppableId, destination.index);
  }

  if (isLoginIn) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Box
          sx={{
            display: 'flex',
            gap: '41px',
            alignItems: 'flex-start',
            padding: '42px 66px',
            overflowX: 'auto',
            height: 'calc(100vh - 56px)',
            '&::-webkit-scrollbar': {
              width: '15px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#A6AAAC',
              borderRadius: '40px',
            },
          }}
        >
          {boards.activeBoard?.lists
            ?.slice()
            .reverse()
            .map((list, index) => {
              if (!list?.closed) {
                return (
                  <ColumnCard
                    index={index}
                    idBoard={list.idBoard}
                    id={list.id}
                    actions={list.actions}
                    name={list.name}
                    key={list.id}
                    data-rerender={count}
                  />
                );
              }
            })}
          {boards.activeBoard ? <ButtonNewColumn idBoard={boards.activeBoard.id} /> : null}
        </Box>
      </DragDropContext>
    );
  }

  return <>Loading...</>;
});

export default Board;
