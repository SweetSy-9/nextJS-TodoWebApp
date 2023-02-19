'use client'

import { useSession, getSession, signOut } from "next-auth/react"

const taskPage = () => {
    const { data: session, status } = useSession()

    if(status === 'unauthenticated') {
        return location.href = '/'
    }
    return (
        <div>
            TASK Pages
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default taskPage