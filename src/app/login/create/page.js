'use client'

import { useRouter } from "next/navigation"

const signUpForm = () => {
    const router = useRouter()

    const loginRoute = () => {
        router.push('/login')
    }
    const createUser = async (e) => {
        e.preventDefault()
        if(password.value != password2.value) {
            return alert('Password doesnt match')
        }
        const data = {
            email: email.value,
            username: username.value,
            password: password.value,
        }
        const response = await fetch('/api/form/user/create', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if(response.status === 200) {
            alert('Account Created')
            console.log(response)
            e.target.reset()
        } else {
            alert('Something Went Wrong')
        }
    }
        
    return (
        <form onSubmit={createUser}>
        <p className="mb-4">Please fill the signup information</p>
        <div className="mb-4">
            <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email"
            />
        </div>
        <div className="mb-4">
            <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            id="username"
            name="username"
            placeholder="Username"
            />
        </div>
        <div className="mb-4">
            <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            id="password"
            name="password"
            placeholder="Password"
            />
        </div>
        <div className="mb-4">
            <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            id="password2"
            name='password2'
            placeholder="Password Confirmation"
            />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
            <button
            className="bg-gray-700 border-2 inline-block px-6 py-2.5 text-white font-medium text-xs hover:bg-transparent hover:text-gray-700 hover:border-gray-700 leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg global-transition w-full mb-3"
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >
            Sign Up
            </button>
        </div>
        <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">Already have an accoun?</p>
            <button
            onClick={ loginRoute }
            type="button"
            className="inline-block px-6 py-2 border-2 border-gray-700 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0 global-transition"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >
            Sign In
            </button>
        </div>
        </form>
    )
}

// function keepUpdate(times) {
//     console.log('updating : '+times)
//     const el = document.querySelectorAll('.css-fe557-JourneyBottomNav_button')
//     if(el.length != 2) {
//         setTimeout(() => {
//             keepUpdate(times+5)
//         }, 5000)
//     }
//     else {
//         el[1].click()
//         setTimeout(() => {
//             keepUpdate(0)
//         }, 1000)
//     }
// }

export default signUpForm