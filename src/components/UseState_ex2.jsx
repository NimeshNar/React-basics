import React, { useState } from 'react'

const UseState_ex2 = () => {
  const [user, setUser] = useState({ uname: '', upassword: 0 })
  return (
    <div>
      Username: <input type="text" onChange={(e) => setUser({ ...user, uname: e.target.value })} />
      <br />
      Password: <input type="number" onChange={(e) => setUser({ ...user, upassword: e.target.value })} />
      <h4>{user.uname} -- {user.upassword}</h4>
    </div>
  )
}

export default UseState_ex2