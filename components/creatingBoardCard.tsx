import { Card, CardContent, TextField } from '@mui/material';
import { Box } from '@mui/system';

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
      </CardContent>
    </Card>
  );
};

export default CreatingBoardCard;
