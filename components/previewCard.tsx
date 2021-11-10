import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { Draggable } from 'react-beautiful-dnd';

import IUser from '../utils/interfaces/IUser';
import Label from './label';

type props = {
  id: string;
  text: string;
  label?: string;
  members?: IUser[];
  index: number;
};

const PreviewCard = observer(({ id, text, label, members, index }: props) => {
  let avatars = null;

  // Получаем дату создания карточки из её ID
  const performDate = (cardID: string) => {
    const date = new Date(1000 * parseInt(cardID.substring(0, 8), 16));
    const month = date.toLocaleString('EN-en', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  if (typeof members !== 'undefined') {
    avatars = (
      <Box sx={{ display: 'flex', gap: '8px', margin: '8px', justifyContent: 'flex-end' }}>
        {members.map((member) => {
          return (
            <Avatar alt={member.fullName} src={member.avatarUrl + '/50.png'} key={member.id} />
          );
        })}
      </Box>
    );
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{ borderColor: '#666666' }}
        >
          <CardContent sx={{ padding: '8px' }}>
            {label ? <Label label={label} /> : null}
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
              <Link href={`card?id=${id}`}>{text}</Link>
            </Typography>
            <Typography sx={{ fontSize: '11px', lineHeight: '16px', color: '#666666' }}>
              {performDate(id)}
            </Typography>
          </CardContent>
          {avatars}
        </Card>
      )}
    </Draggable>
  );
});

export default PreviewCard;
