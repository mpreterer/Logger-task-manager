import { observer } from 'mobx-react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BoardCard = observer(() => (
  <Card variant="outlined" sx={{ height: '170px', width: '250px' }}>
    <CardContent
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h5">name</Typography> <Typography>test</Typography>{' '}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" mb={4}>
          Members:
        </Typography>
        <Avatar />
      </Box>
    </CardContent>
  </Card>
));
export default BoardCard;
