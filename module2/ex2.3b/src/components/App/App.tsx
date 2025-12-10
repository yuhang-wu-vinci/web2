import Main from "../Main/Main";
import Footer from "../Footer/Footer";
const App = () => {
  const footerText = "© 2023 My App";
  
return (
    <div>
      <Main/>
      <Footer title={footerText}/>
    </div>
  );
};

export default App;