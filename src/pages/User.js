import React from 'react'

import { Link } from 'react-router-dom';


 const User = () => {
  return (
    <div>
    <button className='m-5 p-3 rounded-xl bg-gray-400'><Link to='/login' className='p-2'>Login</Link></button>
    <button className='m-5 p-3 rounded-xl bg-gray-400'><Link to='/register' className='p-2'>register</Link></button>
    <button className='m-5 p-3 rounded-xl bg-gray-400'><Link to='/userlist' className='p-2'>user</Link></button>
  

    </div>
  )
}
export default User;