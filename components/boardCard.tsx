import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BoardCard = ({ name, desc, id, members }) => {
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
          <a href={`/board?id=${id}`}><Typography sx={{ fontSize: '24px', lineHeight: '28px' }}>{name}</Typography></a>
          <Typography sx={{ fontSize: '12px', lineHeight: '14px', height: '80px' }}>
            {desc}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '18px', lineHeight: '21px' }}>Members:</Typography>
          {members?.map(member => {
            return <Avatar alt={member.fullName} src={member.avatarUrl + '/50.png'} key={member.id} />
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
