import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from './app-router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
