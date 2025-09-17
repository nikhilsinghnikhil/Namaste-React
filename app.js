import React from "react";
import ReactDOM from "react-dom/client";

/*
        *  Header 
            - logo 
            - Nav Items
        *  Body
            - Search component
            - Restorant-container
                - RestorantCard
                    - img
                    - Name of Res , Star Rating , cuisine , delivery time etc
        * Footer
            - Copyright
            - Contact us
            - Address
            - Links
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li> Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const RestaurantCard = (props) => {
    const {resData} = props;
        return(
            <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/aqsnrylokzpn45qhg1pb"}></img>
                 <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.avgRating}</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.deliveryTime}</h4>
            </div>
        );
};


// backend se data ko pass karna.
const resObj = {
"info": {
"id": "151518",
"name": "Bakery World",
"cloudinaryImageId": "mt2aggiscfl3yviatwng",
"locality": "Parasia Road",
"areaName": "Parasia Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Ice Cream",
"Snacks",
"Beverages"
],
"avgRating": 4.3,
"veg": true,
"parentId": "40363",
"avgRatingString": "4.3",
"totalRatingsString": "293",
"sla": {
"deliveryTime": 55,
"lastMileTravel": 14.1,
"serviceability": "SERVICEABLE",
"slaString": "50-60 mins",
"lastMileTravelString": "14.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-16 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-c6ca6be2-40e8-459e-87e8-cf1dde6c0e73"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
"type": "WEBLINK"
}
}


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


// backend se data ko pass karna.
const Body = () => {
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard  resData={resObj}/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





































// //React Functional Components
// const Title = () => (
//     <h1 className="head" tabIndex="5">Namaste React Using JSX</h1>
// );

// // React Elements
// const elem = <span>React Element</span>;

// // React Elements
// const title =(
//     <div>
//     {elem}
//     <h1 className="head" tabIndex="5">Namaste React Using </h1>
//     </div>
// );

// //React Functional Component
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
// // root.render(heading);

// const jsxHeading = <h1 id="heading">Namaste React using jsx 🚀</h1>;
// // root.render(jsxHeading);


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


