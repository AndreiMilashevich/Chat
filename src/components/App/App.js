import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./chatApp.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO move margins, paddings to low level

const ChatApp = () => {
  return (
    <div>
      <Header   />
      <Main />
      <Footer />
    </div>
  );
}

export default ChatApp;
