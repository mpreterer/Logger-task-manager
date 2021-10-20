import { Box } from '@mui/material';

import ColumnCard from '../components/columnCard';

function Board() {
  const data = [
    {
      title: 'test',
      previewCards: [
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
      ],
    },
    {
      previewCards: [
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
      ],
    },
    {
      previewCards: [
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'low',
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'medium',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
      ],
    },
    {
      previewCards: [
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
      ],
    },
    {
      previewCards: [
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
        {
          text: 'Define more tags in components',
          date: 'Mar 3, 2020',
          difficulty: 'high',
          members: [
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
            { alt: 'alt', url: '' },
          ],
        },
      ],
    },
  ];

  return (
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
      {data.map((item) => {
        return <ColumnCard previewCards={item.previewCards} title={item.title} />;
      })}
    </Box>
  );
}

export default Board;
