import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PreviewCard from '../components/previewCard';
import ILabel from '../utils/interfaces/ILabel';
import IList from '../utils/interfaces/IList';

const ColumnCard = ({ name, cards }: IList) => {
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
      <Typography sx={{ fontSize: '16px', lineHeight: '24px' }}>{name}</Typography>
      {cards?.map((card) => {
        
        const getLabel = (labels: ILabel[]) => {
          if (labels.length) {
            return labels[0].color;
          }

          return undefined;
        };

        return (
          <PreviewCard
            id={card.id}
            text={card.name}
            date={card.dateCreated}
            label={getLabel(card.labels)}
            members={card.members}
            key={card.id}
          />
        );
      })}
    </Box>
  );
};

export default ColumnCard;
