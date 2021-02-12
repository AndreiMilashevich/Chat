import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./chatApp.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


//TODO all components as arrow function
// TODO move margins, paddings to low level

const ChatApp = () => {
  return (
    <div className="vh-100">
      <Header   />
      <Main />
      <Footer />
    </div>
  );
}

export default ChatApp;
