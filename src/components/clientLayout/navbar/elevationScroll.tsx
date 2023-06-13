"use client"
import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
console.log(trigger)
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevationScroll1({ children }: { children: React.ReactElement }) {
  return <><ElevationScroll>{children}</ElevationScroll></>;
}

