import Title from "./title"
import UserList from "./UserList";

const Main =()=>{
    const title = "Welcome to My App";
    const name1 = "Alice";
    const age1 = 25;
    const name2 = "Bob";
    const age2 = 30;
    const name3 = "Charlie";
    const age3 = 35;

    const user1={
        name: name1,
        age: age1
    }

    const user2={
        name: name2,
        age: age2
    }

    const user3 ={
        name: name3,
        age: age3
    }

    const users = [user1, user2, user3]


    return(

        <div>
            <Title title={title}/>
            <UserList users={users}/>
        </div>
        
    )
    
}
export default Main