import { Chip } from '@mui/material';

type props = {
  label: string;
};

type color = {
  [key: string]: string;
  low: string;
  medium: string;
  high: string;
};

const Label = ({ label }: props) => {
  const color: color = {
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
        return null;
    }
  };

  const confirmedDifficulty = getDifficulty(label);
  const textColor = confirmedDifficulty === 'high' ? 'white' : 'black';

  if(!confirmedDifficulty) {
    return null;
  }

  return (
    <Chip
      label={confirmedDifficulty}
      sx={{
        backgroundColor: `${color[confirmedDifficulty]}`,
        color: `${textColor}`,
        textTransform: 'capitalize',
      }}
    ></Chip>
  );
};

export default Label;
