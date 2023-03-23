import{createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'
import Single from './pages/Single'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
      path: "/register",
      element: <Register/>,
  },  
  {
    path: "/login",
    element: <Login/>,
  },  
  {
    path: "/write",
    element: <Write/>,
  },  
  {
    path: "/single",
    element: <Single/>,
  },  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
