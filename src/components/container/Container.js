import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import './Container.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Container() {
  return  <div className="container shadow-lg px-0 mt-3 rounded-circle text-light text-center">
  <Header />
  <Main />
  <Footer />
  </div>
}

export default Container;
