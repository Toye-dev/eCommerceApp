import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import Home from './Home.jsx'
import { AppProvider } from './AppContext.jsx'
import ShopNow from './ShopNow.jsx'
import Cart from './Cart.jsx'
import FinalPage from './FinalPage.jsx'
import About from './About.jsx'
import Workshop from './Workshop.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // the layout with the consistent nav and footer
    children: [
      {
        path: "", // default page of the Root parent. Same as "/"
        element: <Home />
      },
      {
        path: "shopnow",
        element: <ShopNow />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "finalpage",
        element: <FinalPage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "workshop",
        element: <Workshop />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);

//Reminder again
//This Root.jsx is my App layout. The shell of the site - HTML 

//  <nav></nav>

//  <main>
//    <outlet /> These is where the children array stays, where all page contents (components) load - the cake center filling that changes even thought the frosting and decor are always the same  
//  </main>

//  <footer></footer>
// 
// 