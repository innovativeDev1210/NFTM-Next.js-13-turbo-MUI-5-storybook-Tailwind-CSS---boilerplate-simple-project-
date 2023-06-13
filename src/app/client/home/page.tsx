"use client";
import { Box, Container } from "@mui/material";
import { ThemeProvider, useTheme } from '@mui/material/styles';
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(30)]
            .map(
              (i) =>  `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>)
  }