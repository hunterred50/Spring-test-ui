import * as axios from 'axios'

const CreateUser = (user) => {
  return axios.post("http://localhost:8080/test/insert", user).then(resp => {
    console.log(resp)
  })
}

const DisplayAllUsers = () => {
  return axios.get("http://localhost:8080/test/allUsers").then(resp => {
    console.log(resp)
    return resp.data
  })
}

const DeleteUser = (id) => {
  return axios.delete(`http://localhost:8080/test/delete/${id}`).then(resp => {
    console.log(resp)
    return resp.data
  })
}

export default {
  CreateUser: CreateUser,
  DisplayAllUsers: DisplayAllUsers,
  DeleteUser: DeleteUser
}