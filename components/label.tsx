import { Chip } from '@mui/material';

type props = {
  difficulty: string;
};

type color = {
  [key: string]: string;
  low: string;
  medium: string;
  high: string;
};

const Label = ({ difficulty }: props) => {
  const color: color = {
    low: '#BBEBB0',
    medium: '#F0CA81',
    high: '#DE1D3E',
  };

  const textColor = difficulty === 'high' ? 'white' : 'black';

  return (
    <Chip
      label={difficulty}
      sx={{
        backgroundColor: `${color[difficulty]}`,
        color: `${textColor}`,
        textTransform: 'capitalize',
      }}
    ></Chip>
  );
};

export default Label;
