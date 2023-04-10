'use client'

import '../globals.css'
import { SessionProvider } from "next-auth/react"
import Sidebar from '../components/sidebar'

export default function RootLayout({ children }) {
    return (
        <section className="w-full flex flex-nowrap gap-2 gradient-form h-screen">
            <Sidebar />
            <div className='w-auto flex-grow overflow-x-hidden m-2'>
                { children }
            </div>
        </section> 
    )
}
