import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Label from './label';

type props = {
  text: string;
  date: string;
  difficulty: string;
  members?: [{ alt: string; url: string }] | undefined;
};

const PreviewCard = ({ text, date, difficulty, members }: props) => {
  let avatars = null;

  if (typeof members !== 'undefined') {
    avatars = (
      <Box sx={{ display: 'flex', gap: '8px', margin: '8px', justifyContent: 'flex-end' }}>
        {members.map((member: { alt: string; url: string }) => {
          return <Avatar alt={member.alt} url={member.url} />;
        })}
      </Box>
    );
  }

  return (
    <Card variant="outlined" sx={{ borderColor: '#666666' }}>
      <CardContent sx={{ padding: '8px' }}>
        <Label difficulty={difficulty} />
        <Typography
          sx={{
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
            color: '#221c1d',
            marginTop: '8px',
            marginBottom: '8px',
          }}
        >
          {text}
        </Typography>
        <Typography sx={{ fontSize: '11px', lineHeight: '16px', color: '#666666' }}>
          {date}
        </Typography>
      </CardContent>
      {avatars}
    </Card>
  );
};

export default PreviewCard;
