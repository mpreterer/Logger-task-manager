import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import IBoard from '../utils/interfaces/IBoard';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from '../hooks/useStore';

const BoardCard = ({ name, desc, id, members, color = '#0079BF' }: IBoard) => {
  const { boards } = useStore();

  const handleRemoveBoard = async () => {
    const response = confirm(`Remove board ${name} ?`);
    if (response) {
      boards.removeBoard(id);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: '170px',
        width: '250px',
        borderRadius: 0,
        position: 'relative',
        backgroundColor: color,
        color: '#fff',
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <IconButton
        aria-label="delete"
        sx={{
          width: '24px',
          height: '24px',
          margin: '5px 5px 0 0',
        }}
        onClick={handleRemoveBoard}
      >
        <DeleteIcon sx={{ width: '20px', height: '20px' }} />
      </IconButton>
      <Link href={`/board?id=${id}`}>
        <a style={{ textDecoration: 'none' }}>
          <CardContent
            sx={{
              height: '100%',
              '&:hover': {
                opacity: 0.7,
              },
              color: '#fff',
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
                {name.length > 11 ? `${name.slice(0, 11)}...` : name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '14px',
                  height: '70px',
                  overflow: 'hidden',
                  width: '180px',
                  wordBreak: 'break-all',
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
              <Typography sx={{ fontSize: '18px', lineHeight: '21px' }}>Author:</Typography>
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
        </a>
      </Link>
    </Card>
  );
};

export default BoardCard;
