import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./style.scss"
import Galery from "./pages/Galery";
import About from "./pages/About";
import Contacts from "./pages/Contacts"
import "bootstrap/dist/css/bootstrap.min.css"
const Layout = () =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <div className="container"> 
       <RouterProvider router ={router} />
      </div>
    </div>
  );
  
}


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path:"/",
        element:<Home/>
      },

      {
        path:"/post/:id",
        element:<Single />
      },

      {
        path:"/write",
        element:<Write/>
      },

      {
        path:"/galery",
        element:<Galery/>
      },

      {
        path:"/about",
        element:<About/>
      },

      {
        path:"/contacts",
        element:<Contacts/>
      }
    ]
    
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);




export default App;
