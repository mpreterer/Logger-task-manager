import { FC, useState } from 'react';
import { Modal, Typography, Box, Button, TextField } from '@mui/material';
import useStore from '../hooks/useStore';
import { useRouter } from 'next/router';

type Props = {
  isOpen: boolean;
  onClose: any;
  onSave: any;
};

const AddPriorityModal: FC<Props> = ({ isOpen, onClose, onSave }) => {
  const router = useRouter();
  const { boards } = useStore();

  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let color;
    const { id } = router.query;

    if (priority === 'low') {
      color = 'green';
    } else if (priority === 'medium') {
      color = 'yellow';
    } else {
      color = 'red';
    }

    const idBoard = await boards.getIdBoard(id);
    const idLabel = await boards.createNewLabel(idBoard, color, priority);
    await boards.addLabelToCard(id, idLabel);
    onSave();
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: '4px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Add Priority
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            color={priority === 'low' ? 'success' : 'grey'}
            onClick={() => setPriority('low')}
            sx={{ minWidth: '80px', mr: 2 }}
          >
            Low
          </Button>
          <Button
            variant="contained"
            color={priority === 'medium' ? 'warning' : 'grey'}
            onClick={() => setPriority('medium')}
            sx={{ minWidth: '80px', mr: 2 }}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            color={priority === 'high' ? 'error' : 'grey'}
            onClick={() => setPriority('high')}
            sx={{ minWidth: '80px' }}
          >
            High
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="outlined" onClick={onClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export { AddPriorityModal };
