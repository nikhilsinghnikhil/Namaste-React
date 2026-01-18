import "./index.css";

import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Submit from "./Components/Body";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
// import About from "./Components/About";

import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import appStore from "./utils/appStore";
import Register from "./Components/Register";
import Cart from "./Components/Cart";

// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About")); // Lazy loading = it creates a different bundle for himself. and it is loaded after requested.
const Contact = lazy(() => import("./Components/Contact"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //make an api call and send username and password.
    const data = {
      name: "Nikhil Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* poore app ke andar hame username ko pass kar diya jo bhi value hoga 'userName' ka */}
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// ✅ ✅ ✅ FIXED ROUTER WITH FUTURE FLAGS IN RIGHT PLACE
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/menu",
          element: <RestaurantMenu />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/signin",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<h1>Wait a minute...</h1>}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/thank-you",
          element: <Submit />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const Color = {
//     backgroundColor : "Yellow"
// };

// const RestaurantCard = (props) => {
//         return(
//             <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//                 <img className="res-logo"
//                 alt="res-logo"
//                 src={props.image}></img>
//                 <h3>{props.resName}</h3>
//                 <h4>{props.cuisine}</h4>
//                 <h4>{props.rating}</h4>
//                  <h4>{props.deliveryTime}</h4>
//             </div>
//         );
// };
//  se data ko pass karna.
// const Body = () => {
//     return(
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard resName = "Meghna Foods" cuisine ="Biryani , North Indian , Asian" rating = "4.4" deliveryTime = "38 minutes" image = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/aqsnrylokzpn45qhg1pb"/>
//                 <RestaurantCard resName = "KFC" cuisine = "Burger , Indian , Slicy" rating = "4.3" deliveryTime = "20 minutes" image = "https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg"/>
//             </div>
//         </div>
//     )
// }

//React Functional Components
// const Title = () => (
//     <h1 className="head" tabIndex="5">Namaste React Using JSX</h1>
// );

// React Elements
// const elem = <span>React Element</span>;

// React Elements
// const title =(
//     <div>
//     {elem}
//     <h1 className="head" tabIndex="5">Namaste React Using </h1>
//     </div>
// );

//React Functional Component
// const HeadingComponent = () =>{
//     return(
//     <div id="container">
//     <Title/>   {/* it is called Component Composition */}
//     {/* <Title/> {Title()} isko ham aise bhi likh sakte h */}
//     {title}
//     <h1 className="heading"> Namaste React Functional Component</h1>
//     </div>
//     )
// };

// const heading = React.createElement("h1" , {id:"heading"} , "Namaste React 🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const jsxHeading = <h1 id="heading">Namaste React using jsx 🚀</h1>;
// root.render(jsxHeading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child" },
//       [
//         React.createElement("h1", {}, "This is namaste-React 🚀"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "child2" },
//       [
//         React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//       ]
//     )
//   ]
// );
//         console.log(parent);  // it gives object.
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(parent);
