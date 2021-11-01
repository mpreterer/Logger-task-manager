import { Card, CardContent, TextField, FormControl, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import BoardColor from './boardColor';

const CreatingBoardCard = () => {
  return (
    <Card variant="outlined" sx={{ padding: '41px 55px 46px 38px' }}>
      <CardContent>
        <TextField
          label="Name"
          placeholder="Board Name"
          fullWidth={true}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <Box sx={{ marginTop: '35px' }}>
          <TextField
            label="Description"
            placeholder=""
            multiline={true}
            rows={3}
            fullWidth={true}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Box>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            defaultValue="blue"
            name="board-color"
          >
            <BoardColor value="blue" color="#0079BF" />
            <BoardColor value="green" color="#519839" />
            <BoardColor value="purple" color="#88629E" />
            <BoardColor value="pink" color="#CD5A91" />
            <BoardColor value="grey" color="#838C91" />
            <BoardColor value="sky" color="#00AECC" />
            <BoardColor value="lime" color="#4BBF6B" />
            <BoardColor value="orange" color="#D29034" />
            <BoardColor value="red" color="#B04632" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default CreatingBoardCard;
