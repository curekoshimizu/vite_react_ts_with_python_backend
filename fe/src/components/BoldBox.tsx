import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

type BoldBoxProp = {
  bold?: boolean,
  children?: ReactNode
} & BoxProps;

export const BoldBox = ({
  bold = true,
  children,
  ...props
}: BoldBoxProp) => {
  const fontWeight = bold ? 'fontWeightBold' : 'normal';
  return (
    <Box fontWeight={fontWeight} {...props}>
      {children}
    </Box>
  );
};

export const BoldSpan = ({ bold = true, children } : BoldBoxProp) => (
  <BoldBox bold={bold} component="span">{children}</BoldBox>
);

export const BoldDiv = ({ bold = true, children } : BoldBoxProp) => (
  <BoldBox bold={bold} component="div">{children}</BoldBox>
);

export default BoldBox;
