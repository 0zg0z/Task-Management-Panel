import { useState } from 'react'
import Navbar from "../Components/NavBar";

function UserProfile() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin : 0}}>
      <Navbar />
      <h1>Profile</h1>
    </div>
  )
}

export default UserProfile
