'use client'

import { useState } from "react"

const dataView = () => {
    const [findName, setFindName] = useState({username:''})
    const searchData = async () => {
        await fetch('/api/form/user/get',{
            method: 'POST',
            body: JSON.stringify({
                name: findName.username 
            })
        })
        .then((response)=> {
            return response.json()
        })
        .then((response)=> {
            console.log(response.feedback.data)
        })
        
    }
    return (
        <div>
            <input type="text" name="name" onChange={(e) => {
                setFindName({...findName, username: e.target.value})
                console.log(findName.username)
            }}></input>
            <button className="px-10 py-5 bg-slate-500" onClick={searchData}>Check Data</button>
        </div>
    )
}

export default dataView