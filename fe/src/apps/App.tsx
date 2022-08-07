import {
  CssBaseline, Box, Container, Button,
} from '@mui/material';
import { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" fixed>
        <Box>
          <Button
            variant="contained"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default App;
