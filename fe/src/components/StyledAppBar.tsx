import {
  AppBar, Toolbar, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import BoldBox from './BoldBox';

interface LinkedButtonProp {
  title: string;
  selected: boolean;
  path: string;
}

const LinkedButton = ({ title, selected, path }: LinkedButtonProp) => {
  const color = selected ? '#FFA000' : 'white';

  return (
    <>
      <Button>
        <Link to={path} style={{ color, textDecoration: 'none' }}>
          <BoldBox bold={false}>
            {title}
          </BoldBox>
        </Link>
      </Button>
      <Button>
        <BoldBox bold>
          <Link to={path} style={{ color, textDecoration: 'none' }}>
            {title}
          </Link>
        </BoldBox>
      </Button>
    </>
  );
};

interface ILink {
  path: string;
  label: string;
}

interface StyledAppBarProp {
  links: ILink[];
}

const StyledAppBarBase = styled(AppBar)({
  marginBottom: 20,
});
const StyledAppBar = ({ links } : StyledAppBarProp) => {
  const currentLocation = useLocation();

  return (
    <StyledAppBarBase position="static">
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
    </StyledAppBarBase>
  );
};

export default StyledAppBar;
