import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const CustomButton = styled(Button)({
  backgroundColor: 'royalblue',
});

const ReduxExampleApp = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <CustomButton
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        Counter:
        {' '}
        {count}
      </CustomButton>
    </Box>
  );
};

export default ReduxExampleApp;
