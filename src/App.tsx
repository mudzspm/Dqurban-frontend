import './App.css';

import NavBar from './components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;