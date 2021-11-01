import { FormControlLabel, Radio } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const BoardColor = (props:any) => {
  return (
    <FormControlLabel
      value={props.value}
      control={ <Radio checkedIcon={<CheckIcon/>} color="default" />}
      label=""
      className="test-one"
      sx={{ width: "40px", height: "40px", backgroundColor: props.color, borderRadius: "5px" }}

    />
  )
}

export default BoardColor;