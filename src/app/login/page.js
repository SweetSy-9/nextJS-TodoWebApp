'use client'

import { signIn, useSession, getSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {
    const [userData, setUserData] = useState({ username:'', password:'' })
    
    const router = useRouter()
    const routeCreate = () => {
        router.push('/login/create')
    }
    const createAuth = async (e) => {
        e.preventDefault()
        console.log(userData)
        const res = await signIn('login-credentials', {
            username: userData.username,
            password: userData.password,
            redirect: true,
            callbackUrl:'/'
        })
    }
    const doSession = async (context) => {
        const {req, res} = context
        const session = await getSession({req})
        if(session) {
            console.log(session)
           return session 
        }
    }
    return (
        <form onSubmit={ createAuth }>
            <p className="mb-4">Please login to your account</p>
            <div className="mb-4">
                <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Username"
                name='username'
                onChange={( e ) => {
                    setUserData({...userData, username: e.target.value})
                    console.log(e.target.value)
                }}
                />
            </div>
            <div className="mb-4">
                <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Password"
                name="password"
                onChange={( e ) => {
                    setUserData({...userData, password: e.target.value})
                }}
                />
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
                <button
                className="bg-gray-700 border-2 inline-block px-6 py-2.5 text-white font-medium text-xs hover:bg-transparent hover:text-gray-700 hover:border-gray-700 leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg global-transition w-full mb-3"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >
                Log in
                </button>
                <a className="text-gray-500" href="#!">Forgot password?</a>
            </div>
            <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Don't have an account?</p>
                <button
                onClick={routeCreate}
                type="button"
                className="inline-block px-6 py-2 border-2 border-gray-700 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0 global-transition"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >
                Sign Up
                </button>
                {/* <button
                onClick={doSession}
                type="button"
                className="inline-block px-6 py-2 border-2 border-gray-700 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0 global-transition"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >
                Check
                </button> */}
                
            </div>
        </form>
    )
}

export default Login