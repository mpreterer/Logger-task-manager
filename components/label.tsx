import { Chip } from '@mui/material';
import { FC } from 'react';

type Props = {
  label: any;
  onDelete: any;
  labelId: any;
  notRemoved?: any;
};

type Color = {
  [key: string]: string;
  low: string;
  medium: string;
  high: string;
};

const Label: FC<Props> = ({ label, onDelete, labelId, notRemoved = false }) => {
  const color: Color = {
    low: '#BBEBB0',
    medium: '#F0CA81',
    high: '#DE1D3E',
  };

  const getDifficulty = (color: string) => {
    switch (color) {
      case 'red':
        return 'high';
      case 'yellow':
        return 'medium';
      case 'green':
        return 'low';
      default:
        return 'low';
    }
  };

  const confirmedDifficulty = getDifficulty(label);
  const textColor = confirmedDifficulty === 'high' ? 'white' : 'black';

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <>
      {notRemoved ? (
        <Chip
          label={confirmedDifficulty}
          sx={{
            backgroundColor: `${color[confirmedDifficulty]}`,
            color: `${textColor}`,
            textTransform: 'capitalize',
          }}
          data-id-label={labelId}
        ></Chip>
      ) : (
        <Chip
          label={confirmedDifficulty}
          sx={{
            backgroundColor: `${color[confirmedDifficulty]}`,
            color: `${textColor}`,
            textTransform: 'capitalize',
          }}
          data-id-label={labelId}
          onDelete={handleDelete}
        ></Chip>
      )}
    </>
  );
};

export default Label;
