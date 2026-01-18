import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"https//dummy",
                bio: "Loading bio...",
                login: "loading...",
                followers: 0,
                following: 0,
            }
        };
         //console.log("Child Constructer");
    }
    async componentDidMount(){
         //console.log("Child componentDidMount");
        const data =  await fetch ("https://api.github.com/users/nikhilsinghnikhil");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        console.log("Component Did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        const {name,location,bio,login , avatar_url,followers,following} = this.state.userInfo;  // destructuring 
        // const {count , count2} = this.state; // destructuting
         //console.log("Child Render");

        return(
            <div className="user-card">
            {/* <button 
            onClick={()=>{
                //Never update state variables directly
                this.setState({
                    count:this.state.count+1
                })
            }}                 
                >Increase Count</button> */}
            {/* <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1> */}
            {/* <p><b>Followers - {followers}</b></p>
            <p><b>Following - {following}</b></p> */}
           
            <img src={avatar_url} className="about_image"></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Bio: {bio}</h4>
            <h4>Contact: {login}</h4>
            <div className="follow-box">
          <p><b>Followers:</b> {followers}</p>
          <p><b>Following:</b> {following}</p>
        </div>
        </div>
        );
    }
}

export default UserClass;