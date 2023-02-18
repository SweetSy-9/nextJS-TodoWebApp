'use client'

import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const ProtectedRoute = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    if(status === 'loading') {
        return <p className="text-xl">Loading</p>
    }
    if(status === 'unauthenticated') {
        return location.href = '/'
    } 
    if(status === 'authenticated') {
        return (
            <div>
                Protected View
            </div>
        )
    }
}

export default ProtectedRoute