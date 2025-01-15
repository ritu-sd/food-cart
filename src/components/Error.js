import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
       <div className="error">
        <h1>Oops! Something Went Wrong</h1>
        <h4>{err.status}: {err.statusText} </h4>

       </div>
    ); 
};


export default Error;