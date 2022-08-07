import {
  AppBar, Box, Toolbar, Button,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface LinkedButtonProp {
  title: string;
  selected: boolean;
  path: string;
}

const LinkedButton = ({ title, selected, path }: LinkedButtonProp) => {
  const fontWeight = selected ? 'fontWieghtBold' : 'normal';
  const color = selected ? '#FFA000' : 'white';

  return (
    <Button>
      <Box fontWeight={fontWeight}>
        <Link to={path} style={{ color, textDecoration: 'none' }}>
          {title}
        </Link>
      </Box>
    </Button>
  );
};

interface ILink {
  path: string;
  label: string;
}

interface StyledAppBarProp {
  links: ILink[];
}

const StyledAppBar = ({ links } : StyledAppBarProp) => {
  const currentLocation = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        {links.map((link) => (
          <LinkedButton
            key={link.label}
            title={link.label}
            selected={link.path === currentLocation.pathname}
            path={link.path}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default StyledAppBar;
