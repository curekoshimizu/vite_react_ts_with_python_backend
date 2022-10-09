import { CssBaseline, Container } from '@mui/material';
import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { StyledAppBar, ILink } from '../components/StyledAppBar';
import { BoxExample } from '../pages/BoxExample';
import { NotFound } from '../pages/NotFound';
import { ReduxExampleApp } from '../pages/ReduxExample';

const defaultComponent: ReactNode = <NotFound />;

interface LinkWithComponent extends ILink {
  element: ReactNode
}

const linksLeft : LinkWithComponent[] = [
  {
    label: 'box example',
    path: '/',
    visible: true,
    element: <BoxExample />,
  },
  {
    label: 'redux example',
    path: '/redux_example',
    visible: true,
    element: <ReduxExampleApp />,
  },
];
const linksRight: LinkWithComponent[] = [
];

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Container maxWidth="lg" fixed>
      <StyledAppBar
        linksLeft={linksLeft}
        linksRight={linksRight}
      />
      <Routes>
        {
            linksLeft.map((e) => (
              <Route key={e.path} path={e.path} element={e.element} />
            ))
        }
        {
            linksRight.map((e) => (
              <Route key={e.path} path={e.path} element={e.element} />
            ))
        }
        <Route path="*" element={defaultComponent} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
