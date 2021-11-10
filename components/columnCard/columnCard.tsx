import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import PreviewCard from '../previewCard';
import ILabel from '../../utils/interfaces/ILabel';
import IList from '../../utils/interfaces/IList';
import ColumnTextArea from './columnTextArea/columnTextArea';
import ButtonNewCard from '../buttonNewCard/buttonNewCard';

interface props extends IList {
  index: number;
}

const ColumnCard = observer(({ id, name, actions, index }: props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '298px',
        padding: '16px',
        backgroundColor: '#F9F9F9',
        border: '1px solid #E5E5E5',
        borderRadius: '4px',
        flexShrink: 0,
      }}
    >
      <ColumnTextArea listID={id} title={name} />
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {actions?.map((card, index) => {
              const getLabel = (labels: ILabel[]) => {
                if (labels.length) {
                  return labels[0].color;
                }

                return undefined;
              };

              return (
                <PreviewCard
                  index={index}
                  id={card.id}
                  text={card.name}
                  label={getLabel(card.labels)}
                  members={card.members}
                  key={card.id}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ButtonNewCard idList={id} />
    </Box>
  );
});

export default ColumnCard;
