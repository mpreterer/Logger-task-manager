import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import UserAvatar from '../components/avatar';
import useStore from '../hooks/useStore';
import { Box, Container, Typography } from '@mui/material';

const Card = observer(() => {
  const router = useRouter();
  const { boards } = useStore();

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;

    if (id) {
      boards.getActiveCard(`${id}`);
    }

    return function clearActiveCard() {
      boards.clearActiveCard();
    };
  }, [router.isReady]);

  const transformDate = (value: string): string => {
    const date = new Date(value);
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('ru-RU', timeOptions);
  };

  return (
    <Container sx={{ color: 'text.primary', pt: '65px', pb: '65px' }}>
      <Box sx={{ pl: '94px' }}>
        <Typography variant="h2">{boards.activeCard?.name}</Typography>
      </Box>
      <Box sx={{ mt: '40px', pl: '94px', display: 'flex' }}>
        <Box sx={{ mr: '76px' }}>
          <Typography variant="h4">Members</Typography>
          <Box sx={{ mt: '15px', minHeight: '50px' }}>
            {' '}
            {boards.activeCard?.members?.map((member) => {
              return (
                <UserAvatar
                  size="medium"
                  alt={member.fullName}
                  src={member.avatarUrl + '/50.png'}
                  key={member.id}
                />
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">Labels</Typography>
          <Box sx={{ mt: '15px', minHeight: '50px' }}></Box>
        </Box>
      </Box>
      <Box sx={{ mt: '78px', pl: '94px' }}>
        <Typography variant="h4" sx={{ mb: '15px' }}>
          Description
        </Typography>
        <Typography variant="body1" sx={{ mb: '15px', maxWidth: '600px' }}>
          {boards.activeCard?.desc}
        </Typography>
      </Box>
      <Box sx={{ mt: '90px', pl: '94px' }}>
        <Typography variant="h4" sx={{ mb: '15px' }}>
          Comments
        </Typography>
        <Box sx={{ minHeight: '100px' }}>
          {' '}
          {boards.activeCard?.actions?.map((comment) => {
            return (
              <Box sx={{ pt: '6px', pb: '12px', display: 'flex' }} key={comment.id}>
                <Box sx={{ pt: '25px' }}>
                  <UserAvatar
                    size="medium"
                    alt={comment.memberCreator.fullName}
                    src={comment.memberCreator.avatarUrl + '/50.png'}
                  />
                </Box>
                <Box sx={{ pl: '10px' }}>
                  <Typography variant="body2">{comment.memberCreator.fullName}</Typography>
                  <Box
                    sx={{
                      width: '400px',
                      minHeight: '54px',
                      padding: '16px',
                      backgroundColor: '#fff',
                      borderRadius: '4px',
                    }}
                  >
                    {' '}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        color: '#001B45',
                      }}
                    >
                      {comment.data.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ mt: '80px', pl: '94px' }}>
        <Typography variant="h4" sx={{ mb: '15px' }}>
          Last activity
        </Typography>
        <Box sx={{ mt: '15px', minHeight: '50px', display: 'flex', alignItems: 'center' }}>
          {' '}
          <UserAvatar size="medium" alt={' '} src={'/'} />
          <Typography variant="body1" sx={{ pl: '10px', fontWeight: 500, fontSize: '1.5rem' }}>
            {transformDate(`${boards.activeCard?.dateLastActivity}`)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
});

export default Card;
