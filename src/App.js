import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children: [
    {
        path:"/",
        element : <Body/>,
    },
    {
        path:"/about",
        element : <About/>,
    },
    {
        path:"/contact",
        element : <Contact/>,
    },
 ],
        errorElement : <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

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


