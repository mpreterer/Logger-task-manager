import { Card, CardContent, TextField, FormControl, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import BoardColor from './boardColor';
import BasicButton from './button';

const CreatingBoardCard = () => {
  const colors = [
    { value: 'blue', color: '#0079BF' },
    { value: 'green', color: '#519839' },
    { value: 'purple', color: '#88629E' },
    { value: 'pink', color: '#CD5A91' },
    { value: 'grey', color: '#838C91' },
    { value: 'sky', color: '#00AECC' },
    { value: 'lime', color: '#4BBF6B' },
    { value: 'orange', color: '#D29034' },
    { value: 'red', color: '#B04632' },
  ];
  return (
    <Card variant="outlined" sx={{ padding: '22px 45px 20px 5px' }}>
      <CardContent>
        <TextField
          label="Name"
          placeholder="Board Name"
          fullWidth={true}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          sx={{ width: '328px', marginLeft: '16px' }}
        />
        <Box sx={{ marginTop: '35px', marginLeft: '16px', width: '328px' }}>
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
            defaultValue="blue"
            name="board-color"
            row={true}
            sx={{ width: '362px', display: 'flex', mt: '30px' }}
          >
            {colors.map((item) => (
              <BoardColor value={item.value} color={item.color} />
            ))}
          </RadioGroup>
        </FormControl>
        <BasicButton
          url="/"
          text="create"
          sx={{
            width: '169px',
            height: '36px',
            mt: '27px',
            ml: '16px',
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CreatingBoardCard;
