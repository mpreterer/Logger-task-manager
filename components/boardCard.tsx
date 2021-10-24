import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import UserAvatar from './avatar';

const BoardCard = ({ name, desc, id, members }: { name: string; desc: string; id: string; members: {id: string; fullName: string; avatarUrl: string}[]; }) => {
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
          <Typography sx={{ fontSize: '24px', lineHeight: '28px' }}><Link href={"/board?id="+id}>{name}</Link></Typography>
          <Typography sx={{ fontSize: '12px', lineHeight: '14px', height: '80px' }}>
            {desc}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '18px', lineHeight: '21px' }}>Members:</Typography>
          {members.map(member => {
            return <UserAvatar size={"mini"} name={member.fullName} avatarUrl={member.avatarUrl} key={member.id} />
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
