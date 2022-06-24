import React from 'react';
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import {
  COLOR_SECONDARY_BRIGHT,
  COLOR_WHITE,
  FONT_SIZE_BODY1_DESKTOP,
  FONT_SIZE_H1_DESKTOP
} from '../../utils/constants';
import { PrimaryButton, PrimaryTextField } from '../../components/customComponents';

export default function HeroSection() {
  return (
    <Box position="relative">
      <Box position="absolute" zIndex={10} top={-200} left={0}>
        <Box component="img" src="assets/images/rectangle-oblique-left.png" alt="" />
      </Box>
      <Box ml={{ md: 32 }} mt={12} position="relative" zIndex={20}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={5}>
            <Typography
              fontSize={FONT_SIZE_H1_DESKTOP}
              fontWeight={700}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Measure Your Performance<br /> In The NFT Space With Ease
            </Typography>
            <Typography
              fontSize={FONT_SIZE_BODY1_DESKTOP}
              color={COLOR_SECONDARY_BRIGHT}
              textAlign={{ xs: 'center', md: 'left' }}
              mt={2}
            >
              Our tool helps you understand your NFT investments better through analysis and comprehensive insights!
            </Typography>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <Box width={{ xs: '90%', md: '70%' }} mt={5}>
                <PrimaryTextField
                  placeholder="Put your wallet address here"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PrimaryButton variant="contained">
                          Analyze
                        </PrimaryButton>
                      </InputAdornment>
                    )
                  }}
                  fullWidth
                />
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={1} md={2} />
          <Grid item xs={12} sm={5} md={5}>
            <Box 
              component="img" 
              src="assets/images/hero-laptop.png" 
              alt="" 
              width="100%" 
              sx={{ display: { xs: 'none', sm: 'block' } }}
            />
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row" justifyContent="center" width="100%" mt={{ xs: 6, md: 12 }}>
        <IconButton>
          <KeyboardArrowDown sx={{ color: COLOR_WHITE, fontSize: FONT_SIZE_H1_DESKTOP }} />
        </IconButton>
      </Stack>
    </Box>
  );
}