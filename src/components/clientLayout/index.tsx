/* eslint-disable react/no-children-prop */
"use client";
import * as React from 'react';
import Navbar from './navbar'

export default function App({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <Navbar>
      {children}
    </Navbar>
  )
}
