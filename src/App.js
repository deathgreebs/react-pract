import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { UserItem } from './components/UserItem/UserItem'
import { MyInput } from './components/MyInput/MyInput'


const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [values, setValues] = useState({name: '', password: '', email: ''})
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
        setIsLoading(false)
      }
      catch(e) {
        console.log('error: ', e)
      }
    }
    getUsers()
  }, [])
  return (
    <div>
    <form>
      <MyInput value={values.name} onChange={(e) => {console.log(setValues({...values, name: e.target.value}))}}/>
      <button type='submit'>Send</button>
    </form>
      {!isLoading ? users.map(user => <UserItem key={user.id} {...user}/>) : 'Loading...'}
    </div>
  )
}
export default App
