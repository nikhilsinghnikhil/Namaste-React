import User from "../../User";
import UserClass from "./UserClass";
import { Component } from "react";
import "./About.css";
import UserContext from "../utils/UserContext";
import { data } from "autoprefixer";

class About extends Component {
  // First it called constructer() then render() after that componentDidMount().
  constructor(props) {
    super(props);
    //console.log("Parent Constructer");
  }
  componentDidMount() {
    //isse ham class compontnts ke andar api call karte h. functional component ke andar api call karne ke liye useEffect use karte h.
    // console.log("Parent componentDidMount");
  }
  render() {
    //console.log("Parent render");
    return (
      <div className="about-container">
        <div className="font-bold text-5xl pb-8">
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1> {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <div className="about-hero">
          <h1>About Our Food Delivery App 🍔🚀</h1>
          <p>
            We deliver your favorite food from the best restaurants fast, fresh,
            and at your doorstep.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make food ordering simple, fast, and affordable
            for everyone by connecting users with nearby restaurants.
          </p>
        </div>
        <div className="about-section">
          <h2>Developer</h2>
          <div className="about-card-wrapper">
            <UserClass name={"Nikhil"} location={"Noida"} />
          </div>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>✅ Fast Delivery</li>
            <li>✅ Best Restaurants Nearby</li>
            <li>✅ Live Order Tracking</li>
            <li>✅ Secure Online Payments</li>
            <li>✅ 24/7 Customer Support</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>How It Works</h2>
          <div className="service-flow">
            <div className="flow-card">📍 Choose Location</div>
            <div className="flow-card">🍽 Select Restaurant</div>
            <div className="flow-card">🛒 Add to Cart</div>
            <div className="flow-card">🚴 Fast Delivery</div>
          </div>
        </div>
        <div className="about-section contact-section">
          <h2>Connect With Us</h2>
          <p>Email: support@fooddeliveryapp.com</p>
          <div className="social-links">
            <a
              href="https://github.com/nikhilsinghnikhil"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/nikhil_singh_1503/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-singh-8338a9306/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}
/* Parent Constructer  //Render Phase
   Parent render
    - First Constructer
    - First  render

    - Second Constructer
    - Second render

    <DOM UPDATED - IN SINGLE BATCH>  // Commit Phase
    - First componentDidMount
    - Second componentDidMount

  Parent componentDidMount
*/

export default About;
