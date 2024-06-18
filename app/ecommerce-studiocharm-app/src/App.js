import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro, Home, Login } from './components/Screens';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
