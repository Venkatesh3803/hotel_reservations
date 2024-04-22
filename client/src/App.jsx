import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout, RequireAuth } from "./lib/Layout"
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AddRoom from "./pages/AddRoom";
import Setting from "./pages/Setting";
import SingleRoom from "./pages/SingleRoom";
import Profile from "./pages/Profile";
import MyReservations from "./pages/MyReservatins";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/rooms",
          element: <RoomsPage />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/singleroom/:id",
          element: <SingleRoom />,
        },
      ],
    },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/addroom",
          element: <AddRoom />,
        },
        {
          path: "/settings/:id",
          element: <Setting />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/reservations/:id",
          element: <MyReservations />,
        },
      ],
    },

    {
      path: "/register",
      element: <Registration />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;


}


export default App
