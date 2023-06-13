/* eslint-disable @next/next/no-page-custom-font */
"use client"
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import '@/app/globals.css'
import { Metadata } from 'next';
import { Providers } from '@/store/provider';
import { store } from '@/store';

const theme = createTheme({})

export const metadata: Metadata = {
	viewport: 'initial-scale=1, width=device-width'
}

const cache = createCache({
  key: 'css',
  prepend: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<Providers>
				<CacheProvider value={cache}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<body>
							<ThemeProvider theme={theme}>
								<CssBaseline />
								{children}
							</ThemeProvider>
						</body>
					</LocalizationProvider>
				</CacheProvider>
			</Providers>
		</html>
  )
}
