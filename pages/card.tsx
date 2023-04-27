import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import UserAvatar from '../components/avatar';
import useStore from '../hooks/useStore';
import { Box, Button, Container, Typography } from '@mui/material';
import Label from '../components/label';
import { AddPriorityModal } from '../components/addPriorityModal';
import { TextareaAutosize } from '@mui/material';

const Card = observer(() => {
  const router = useRouter();
  const { user, boards } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [haveLabels, setHaveLabels] = useState(true);
  const [description, setDescription] = useState('');
  const [labels, setLabels] = useState([]);

  const label = boards.activeCard?.labels[0];

  useEffect(() => {
    if (label) {
      setLabels([{ color: label.color, id: label.id }]);
      setHaveLabels(false);
    }
  }, [label]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const { id } = router.query;
    const { activeUser } = user;
    if (!activeUser) {
      user.getUser();
    }

    if (!router.isReady) return;

    if (id) {
      boards.getActiveCard(`${id}`);
    }

    async function fetchLabels() {
      // const responseLabels = (await boards.haveLabels(id)).data;
      const responseDesc = (await boards.getDescription(id))['_value'];
      setDescription(responseDesc);
    }

    fetchLabels();

    async function fetchColor() {
      let idBoard = await boards.getIdBoard(id);
      let color = await boards.getBackgroundColor(idBoard);
      document.body.style.backgroundColor = hexToRgb(color.backgroundColor);
      document.documentElement.style.backgroundColor = hexToRgb(color.backgroundColor);
    }

    fetchColor();

    return function clearActiveCard() {
      boards.clearActiveCard();
    };
  }, [router.isReady]);

  const handleClickRemoveCard = async () => {
    const { id } = router.query;
    await boards.removeCard(id);
    alert('Card removed');

    window.history.back();
  };

  function hexToRgb(hex: any) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }

  const transformDate = (value: string): string => {
    const date = new Date(value);
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('ru-RU', timeOptions);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    console.log('open');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRemoveLabel = async (labelId: string) => {
    boards.deleteBoardLabel(labelId);
    const newLabels = boards.activeCard?.labels?.filter((label) => label.id !== labelId);
    boards.activeCard = { ...boards.activeCard, labels: newLabels };
    setHaveLabels(true);
    setLabels([]);
  };

  const handlePrioritySave = async () => {
    const { id } = router.query;
    const labelInfo = (await boards.haveLabels(id)).data[0];
    setLabels([{ color: labelInfo.color, id: labelInfo.id }]);
    setHaveLabels(false);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSaveDescription = async () => {
    const { id } = router.query;
    await boards.addedDescriptionCard(id, description);
  };

  return (
    <Container sx={{ color: 'text.secondary', pt: '65px', pb: '65px' }}>
      <Box sx={{ pl: '94px', wordBreak: 'break-all' }}>
        <Typography variant="h2">{boards.activeCard?.name}</Typography>
      </Box>
      <Box sx={{ mt: '40px', pl: '94px', display: 'flex' }}>
        <AddPriorityModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={handlePrioritySave}
        />
        <Box>
          <Typography variant="h4">Labels</Typography>
          <Box sx={{ mt: '15px', minHeight: '50px', display: 'flex', alignItems: 'center' }}>
            {labels?.map((label: any) => {
              const removeLabelHandler = () => handleRemoveLabel(label.id);
              return (
                <Box key={label.id} sx={{ mr: '5px' }}>
                  <Label
                    label={label.color}
                    onDelete={removeLabelHandler}
                    data-id-label={label.id}
                  />
                </Box>
              );
            })}
            {haveLabels ? (
              <Button
                variant="contained"
                sx={{
                  minWidth: 'initial',
                  width: '45px',
                  height: '45px',
                  background: '#9B9B9B',
                  borderRadius: '4px',
                }}
                onClick={handleModalOpen}
              >
                <Typography
                  variant="button"
                  fontSize="38px"
                  lineHeight="38px"
                  sx={{
                    height: '45px',
                  }}
                >
                  +
                </Typography>
              </Button>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '58px', pl: '94px', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ mb: '15px' }}>
          Description
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Add a description..."
          value={description}
          onChange={handleDescriptionChange}
          style={{ padding: '10px', width: '500px', maxWidth: '500px', fontSize: '14px' }}
        />
        <Button
          sx={{ marginTop: '10px', width: '100px' }}
          variant="contained"
          onClick={handleSaveDescription}
        >
          Save
        </Button>
      </Box>
      {boards.activeCard?.actions?.length !== 0 && (
        <Box sx={{ mt: '90px', pl: '94px' }}>
          <Typography variant="h4" sx={{ mb: '15px' }}>
            Comments
          </Typography>
          <Box sx={{ minHeight: '100px' }}>
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
                    <Typography variant="body1">{comment.memberCreator.fullName}</Typography>
                    <Box
                      sx={{
                        width: '400px',
                        minHeight: '54px',
                        padding: '16px',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                      }}
                    >
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
      )}
      <Box sx={{ mt: '80px', pl: '94px' }}>
        <Typography variant="h4" sx={{ mb: '15px' }}>
          Last activity
        </Typography>
        <Box sx={{ mt: '15px', minHeight: '50px', display: 'flex', alignItems: 'center' }}>
          <UserAvatar
            size="medium"
            alt={user?.activeUser?.fullName}
            src={user?.activeUser?.avatarUrl + '/50.png'}
          />
          <Typography variant="body1" sx={{ pl: '10px', fontWeight: 500, fontSize: '1.5rem' }}>
            {transformDate(`${boards.activeCard?.dateLastActivity}`)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleClickRemoveCard}
          color="error"
          sx={{ mt: '70px' }}
        >
          Remove Card
        </Button>
      </Box>
    </Container>
  );
});

export default Card;
