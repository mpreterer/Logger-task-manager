import { Box } from '@mui/system';
import PreviewCard from '../components/previewCard';

function Board() {
  return (
    <Box
      sx={{
        width: '298px',
        padding: '16px',
        backgroundColor: 'white',
        display: 'grid',
        gap: '20px',
      }}
    >
      <PreviewCard text="Define more tags in components" date="Mar 3, 2020" difficulty="low" />
      <PreviewCard
        text="Define more tags in components"
        date="Mar 3, 2020"
        difficulty="medium"
        members={[{ alt: 'alt', url: '' }]}
      />
      <PreviewCard
        text="Define more tags in components"
        date="Mar 3, 2020"
        difficulty="high"
        members={[
          { alt: 'alt', url: '' },
          { alt: 'alt', url: '' },
          { alt: 'alt', url: '' },
        ]}
      />
    </Box>
  );
}

export default Board;
