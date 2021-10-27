import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PreviewCard from '../components/previewCard';

const ColumnCard = ({ title, previewCards }) => {
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
      <Typography sx={{ fondSize: '16px', lineHeight: '24px' }}>{title}</Typography>
      {previewCards.map((previewCard) => {
        return (
          <PreviewCard
            text={previewCard.text}
            date={previewCard.date}
            difficulty={previewCard.difficulty}
            members={previewCard.members}
          />
        );
      })}
    </Box>
  );
};

export default ColumnCard;
