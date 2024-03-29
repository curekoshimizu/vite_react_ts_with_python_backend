import {
  Grid, Paper, Box, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  CenterBox, BoldBox, BoldDiv, BoldSpan,
} from '../components/ExtendedBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'yellow',
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const BoxExample = () => (
  <>
    <Typography variant="h4">Grid</Typography>
    <Grid container columnSpacing={10} rowSpacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
    <Box m={5} />
    <Typography variant="h4">BOLD</Typography>
    <BoldBox
      m="center"
      sx={{
        width: 300,
        height: 300,
        color: 'white',
        backgroundColor: 'primary.dark',
      }}
      mb={2}
      mt={2}
    >
      BoldBox
    </BoldBox>
    <Typography variant="h6">
      When you want to use bold span, use
      <BoldSpan>&quot;BoldSpan&quot;</BoldSpan>
      !
    </Typography>
    <Typography variant="h6">
      When you want to use bold div, use
      <BoldDiv>&quot;BoldDiv&quot;</BoldDiv>
      !
    </Typography>
    <Box m={5} />
    <Typography variant="h4">Centering</Typography>
    <CenterBox
      sx={{
        color: 'white',
        backgroundColor: 'primary.dark',
      }}
      p={2}
    >
      CenterBox
    </CenterBox>
    <Box m={5} />
    <Typography variant="h4">m (margin) and p (padding)</Typography>
    <Typography variant="h6">
      unit is `theme.space`.
      theme.space(1) is 4px by default.
    </Typography>
    <Box textAlign="center">
      <Box m={10} p={0} bgcolor="#ef5350">m=10 p=0 </Box>
      <Box m={0} p={0} bgcolor="#ab47bc">m=0 p=0</Box>
      <Box m={0} p={10} bgcolor="#5c6bc0">m=0 p=10</Box>
      <Box m={10} p={10} bgcolor="#29b6f6">m=10 p=10</Box>
    </Box>
  </>
);
