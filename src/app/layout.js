'use client'

import './globals.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import { SessionProvider } from "next-auth/react"

import { usePathname } from 'next/navigation'
import { Component } from 'react'

export default function RootLayout({ children, session}) {
  // alert(usePathname())
  
  if(['/login', '/login/create'].includes(usePathname())) {
    return (
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
          <SessionProvider session={session}>
          <body > 
            {children}
          </body>
          </SessionProvider>
      </html>
    )  
  } else if(['/'].includes(usePathname())) {
    return (
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <SessionProvider session={session}>
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </SessionProvider>
      </html>
    )
  }
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SessionProvider session={session}>
        <body>
          <Navbar />
          <Header />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  )
}
