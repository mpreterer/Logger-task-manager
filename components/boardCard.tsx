import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import IBoard from '../utils/interfaces/IBoard';

const BoardCard = ({ name, desc, id, members }: IBoard) => {
  return (
    <Link href={`/board?id=${id}`}>
      <a style={{ textDecoration: 'none' }}>
        <Card
          variant="outlined"
          sx={{
            height: '170px',
            width: '250px',
            borderRadius: 0,
            position: 'relative',

            '&:hover&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: 'rgba(135, 134, 134, 0.4)',
              zIndex: '9999999999999',
              top: 0,
              width: '100%',
              height: '100%',
            },
          }}
        >
          <CardContent
            sx={{
              height: '100%',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '28px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '14px',
                  height: '70px',
                  overflow: 'hidden',
                }}
              >
                {desc}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <Typography sx={{ fontSize: '18px', lineHeight: '21px' }}>Members:</Typography>
              {members?.map((member) => {
                return (
                  <Avatar
                    alt={member.fullName}
                    src={member.avatarUrl + '/50.png'}
                    key={member.id}
                  />
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default BoardCard;
