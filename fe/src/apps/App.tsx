import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StyledAppBar from '../components/StyledAppBar';
import BoxExample from '../pages/BoxExample';
import ReduxExampleApp from '../pages/ReduxExample';

const links = [
  { label: 'redux example', path: '/redux_example' },
  { label: 'box example', path: '/box_example' },
];

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Container maxWidth="lg" fixed>
      <StyledAppBar links={links} />
      <Routes>
        <Route path="/" element={<ReduxExampleApp />} />
        <Route path="/redux_example" element={<ReduxExampleApp />} />
        <Route path="/box_example" element={<BoxExample />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
