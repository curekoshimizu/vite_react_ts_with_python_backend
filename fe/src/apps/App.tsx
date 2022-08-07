import {
  CssBaseline, Box, Container, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StyledAppBar from '../components/StyledAppBar';

const CustomButton = styled(Button)({
  backgroundColor: 'royalblue',
});

const ExampleApp = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <CustomButton
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </CustomButton>
    </Box>
  );
};
const ExampleApp2 = () => (
  <Box>
    Hello
  </Box>
);

const links = [
  { label: 'example', path: '/' },
  { label: 'example2', path: '/example2' },
];

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Container maxWidth="lg" fixed>
      <StyledAppBar links={links} />
      <Routes>
        <Route path="/" element={<ExampleApp />} />
        <Route path="/example" element={<ExampleApp />} />
        <Route path="/example2" element={<ExampleApp2 />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
