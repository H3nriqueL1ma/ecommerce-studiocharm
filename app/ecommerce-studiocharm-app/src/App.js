import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro, Home, Login, MinhaConta, RecuperarSenha } from './components/Screens';

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
  },
  {
    path: "/recuperar-senha",
    element: <RecuperarSenha />
  },
  {
    path: "/minha-conta",
    element: <MinhaConta />
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
