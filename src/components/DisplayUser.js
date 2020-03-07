import React, {useState, useEffect} from 'react'
import DisplayUsers from '../library/test'
import DeleteUser from '../library/test'

const DisplayUser = props => {
  const [displayed, setDisplayed] = useState(null)

  useEffect(() => {
    DisplayUsers.DisplayAllUsers().then(resp => {
      updateUsers(resp)
    })
  }, [])

  const removeUser = (id) => {
    DeleteUser.DeleteUser(id);
    console.log(id);
  }

  const updateUsers = (val) => {
    setDisplayed( val.map(user => {
      return <li key={user.id}>
        {user.firstName}, {user.lastName}
        <button onClick={() => removeUser(user.id)}>remove</button>
      </li>
    })
  )}

  return (
    <div>
      {displayed}
      {/* <button onClick={updateUsers}>show users</button> */}
    </div>
  )
}

export default DisplayUser
