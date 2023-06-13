"use client";
import { Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    };
    return (
      <Fade in={isScrolled}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
        </Box>
      </Fade>
    )
}