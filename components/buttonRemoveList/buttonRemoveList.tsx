import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const buttonRemoveList = ({ onClick }: any) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="delete"
      sx={{ width: '24px', height: '24px', marginLeft: 'auto' }}
    >
      <DeleteIcon sx={{ width: '20px', height: '20px' }} />
    </IconButton>
  );
};

export default buttonRemoveList;
