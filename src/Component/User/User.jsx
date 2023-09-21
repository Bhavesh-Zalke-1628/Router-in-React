import React from 'react'
import { useParams } from 'react-router-dom';
const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-3xl p-4 text-white'>User : {userid}</div>
  )
}

export default User;
