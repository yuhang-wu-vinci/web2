interface User{
    name : string,
    age : number
}

interface Users{
    users : User[]
}


const UserList = (props : Users)=>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Presentation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.name} a {user.age} ans.</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList