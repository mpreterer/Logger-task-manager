import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BoardCard = ({ name, description }: { name: string; description: string }) => {
  return (
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
          <Typography sx={{ fontSize: '24px', lineHeight: '28px' }}>{name}</Typography>
          <Typography sx={{ fontSize: '12px', lineHeight: '14px', height: '80px' }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '18px', lineHeight: '21px' }}>Members:</Typography>
          <Avatar />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
