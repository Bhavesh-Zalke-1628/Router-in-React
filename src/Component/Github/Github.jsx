import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Bhavesh-Zalke-1628')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //         console.log(setData(data))
    //     })
    // }, []);
  return (
    <div className="text-center m-5 bg-gray-400 text-white p-4 text-2xl">Github Follower :{data.followers}
        <img src={data.avatar_url} alt="Github Profle " className='w-64 rounded  text-center  p-5'/>
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Bhavesh-Zalke-1628')
  return response.json()
}