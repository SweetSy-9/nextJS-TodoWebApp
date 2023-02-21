'use client'

import '../globals.css'
import { SessionProvider } from "next-auth/react"
import Sidebar from '../components/sidebar'

export default function RootLayout({ children }) {
    return (
        <section className="h-full gradient-form md:h-screen">
            <Sidebar />
            { children }
        </section> 
    )
}
