import {
  CssBaseline, Box, Container, Button, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BoldSpan, BoldDiv } from '../components/BoldBox';
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
const BoxExample = () => (
  <>
    <Typography variant="h4">BOLD</Typography>
    <Typography variant="h6">
      When you want to use bold span, use
      {' '}
      <BoldSpan>&quot;BoldSpan&quot;</BoldSpan>
      {' '}
      !
    </Typography>
    <Typography variant="h6">
      When you want to use bold div, use
      {' '}
      <BoldDiv>&quot;BoldDiv&quot;</BoldDiv>
      {' '}
      !
    </Typography>
    <Box m={5} />
    <Typography variant="h4">Centering</Typography>
    <Box
      display="flex"
      width={500}
      height={200}
      bgcolor="lightblue"
    >
      <Box m="auto">
        <Box>1. Box</Box>
        <Box>use m=&quot;auto&quot; with Box</Box>
      </Box>
    </Box>
    <Box
      display="flex"
      width={500}
      height={200}
      bgcolor="lightgreen"
      alignItems="center"
      justifyContent="center"
    >
      <div>2. Box</div>
      <div>use alignItems and justifyContent with Box</div>
    </Box>
  </>
);

const links = [
  { label: 'example', path: '/' },
  { label: 'box_example', path: '/box_example' },
];

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Container maxWidth="lg" fixed>
      <StyledAppBar links={links} />
      <Routes>
        <Route path="/" element={<ExampleApp />} />
        <Route path="/example" element={<ExampleApp />} />
        <Route path="/box_example" element={<BoxExample />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
