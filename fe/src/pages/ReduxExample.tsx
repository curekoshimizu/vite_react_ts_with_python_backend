import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { actions } from '../slices/counterSlices';
import { useAppSelector, useAppDispatch } from '../store';

const CustomButton = styled(Button)({
  backgroundColor: 'royalblue',
});

const ReduxExampleApp = () => {
  const counter = useAppSelector((state) => state.counter);
  const [localCount, setLocalCount] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <>
      <Box p={10}>
        <CustomButton
          variant="contained"
          onClick={() => setLocalCount(localCount + 1)}
        >
          Local Counter:
          {' '}
          {localCount}
        </CustomButton>
      </Box>
      <Box p={10}>
        <CustomButton
          variant="contained"
          onClick={() => dispatch(actions.addCounter(1))}
        >
          Global Counter:
          {' '}
          {counter}
        </CustomButton>
      </Box>
    </>
  );
};

export default ReduxExampleApp;
