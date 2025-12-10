import { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";
import Header from "./Header";

const App = () => {
  const title = "Welcome to My App";

  const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const footerText = "© 2023 My App";
  const headerText = "Le Header";

  const footerImg = "https://plus.unsplash.com/premium_photo-1764532087829-0f652beb1f52?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const headerImg = "https://plus.unsplash.com/premium_photo-1764532087829-0f652beb1f52?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
  return (
    <div>
      <Header text={headerText} image={headerImg}>
        <p>test enfant header</p>
      </Header>
      <PageTitle title={title} />
      {users.map((user) => (
        <UserCard user={user} />
      ))}
      <Footer text ={footerText} image={footerImg} >
        <p>test enfant footer</p>
      </Footer>
    </div>
  );
};

export default App;
