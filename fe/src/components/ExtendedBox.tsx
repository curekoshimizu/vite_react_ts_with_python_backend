import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

export type BoldBoxProp = {
  bold?: boolean,
  children?: ReactNode
} & BoxProps;

export const BoldBox:React.FC<BoldBoxProp> = ({
  bold = true,
  children,
  ...props
}) => {
  const fontWeight = bold ? 'fontWeightBold' : 'normal';
  return (
    <Box fontWeight={fontWeight} {...props}>
      {children}
    </Box>
  );
};

export type CenterBoxProp = {
  children?: ReactNode
} & BoxProps;

export const CenterBox: React.FC<CenterBoxProp> = ({
  children,
  ...props
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box {...props}>
      {children}
    </Box>
  </Box>
);

export const BoldSpan: React.FC<BoldBoxProp> = ({ bold = true, children }) => (
  <BoldBox bold={bold} component="span">{children}</BoldBox>
);

export const BoldDiv : React.FC<BoldBoxProp> = ({ bold = true, children }) => (
  <BoldBox bold={bold} component="div">{children}</BoldBox>
);
