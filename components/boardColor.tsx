import { FormControlLabel, Radio } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

type props = { value: string; color: string };

const BoardColor = ({ value, color }: props) => {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          checkedIcon={<CheckIcon sx={{ color: 'white' }} />}
          icon={<CheckIcon sx={{ display: 'none' }} />}
        />
      }
      label=""
      sx={{
        margin: '7px 16px',
        width: '40px',
        height: '40px',
        backgroundColor: color,
        borderRadius: '5px',
      }}
    />
  );
};

export default BoardColor;
