import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/dashboard/default">
            <button className='btn btn-primary'>Go Home</button>
            </Link>
           
        </div>
    );
}

export default ErrorPage