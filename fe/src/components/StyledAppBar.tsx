import {
  AppBar, Toolbar, Button, Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';

import { BoldDiv } from './ExtendedBox';

interface LinkedButtonProp {
  title: string;
  path: string;
}

const LinkedButton = ({ title, path }: LinkedButtonProp) => {
  return (
    <Button>
        <NavLink to={path} style={({isActive}) =>  (
            {
                color: isActive ? '#FFA000' : 'white',  
                    textDecoration: 'none' ,
            }
        )}>
        <BoldDiv bold>
          {title}
        </BoldDiv>
      </NavLink>
    </Button>
  );
};

export interface ILink {
  path: string;
  label: string;
  visible: boolean;
}

export interface StyledAppBarProp {
  linksLeft: ILink[];
  linksRight: ILink[];
}

const StyledAppBarBase = styled(AppBar)({
  marginBottom: 20,
});
export const StyledAppBar = ({
  linksLeft,
  linksRight,
} : StyledAppBarProp) => {
  const currentLocation = useLocation();

  return (
    <StyledAppBarBase position="static">
      <Toolbar>
        {linksLeft.map((link) => {
          if (!link.visible) {
            return <></>;
          }
          return (
            <LinkedButton
              key={link.label}
              title={link.label}
              path={link.path}
            />
          );
        })}
        <Box sx={{ flexGrow: 1 }} />
        {linksRight.map((link) => {
          if (!link.visible) {
            return <></>;
          }
          return (
            <LinkedButton
              key={link.label}
              title={link.label}
              path={link.path}
            />
          );
        })}
      </Toolbar>
    </StyledAppBarBase>
  );
};

export default StyledAppBar;
