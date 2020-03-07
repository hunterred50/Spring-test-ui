import React, {useState} from 'react'
import CreateUser from '../library/test'

const PostUser = props => {
  const [user, setUser] = useState({firstName: "", lastName: ""})
  const sendInput = (event) => {
    // event.preventDefault()
    CreateUser.CreateUser(user)
  }

  return (
    <div>
      <form onSubmit={sendInput}>
        <label>
          Name:
          <input type="text" onChange={event => setUser({...user, firstName: event.target.value})} value={user.firstName} name="firstName" required />
          <input type="text" onChange={event => setUser({...user, lastName: event.target.value})} value={user.lastName} name="lastName" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default PostUser
