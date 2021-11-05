import Link from 'next/link';
import { Button } from '@mui/material';

type props = { url: string; text: string; sx: any };

const BasicButton = ({ url, text, sx }: props) => {
  return (
    <Link href={url}>
      <Button variant="contained" sx={sx}>
        {text}
      </Button>
    </Link>
  );
};

export default BasicButton;
