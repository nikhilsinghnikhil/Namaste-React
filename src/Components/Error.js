import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> Oops!!!</h1>
            <h2>Something went wrong...</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;