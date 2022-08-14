import React, {useState,useEffect} from 'react'

const SearchComponent = () => {
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("") 

    const URL = 'http://jsonplaceholder.typicode.com/users'
const searcher = (e) =>{
    setSearch(e.target.value)
    
} 
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }
    showData()

    


    const results = !search ? users : users.filter((dato)=> dato.price.toLowerCase().includes(search.toLocaleLowerCase()))
    
    
    useEffect(()=>{
        showData()
    },[])
    console.log("hola mundo")
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder="search" />
        <table>
            <thead>
                <tr>
                    <th>
                        <th>NAME</th>
                        <th>USER NAME</th>
                    </th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
//NUEVAACTUALIZACION

export default SearchComponent