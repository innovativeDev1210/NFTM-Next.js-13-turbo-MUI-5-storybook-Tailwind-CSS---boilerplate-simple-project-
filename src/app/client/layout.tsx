"use client";
import ClientLayout from '@/components/clientLayout'

export const metadata = {
  title: 'Auth Next.js 13',
  description: 'Auth by next.js 13 app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  )
}
