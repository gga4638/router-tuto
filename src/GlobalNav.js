import React from "react";
import { Link } from "react-router-dom";

function GlobalNav() {
    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="expenses">Invoices</Link> |{" "}
                <Link to="dashboard">Dashboard</Link> |{" "}
                <Link to="activity">Activity</Link> |{" "}
            </nav> 
            <hr />
        </>
    );
}

export default GlobalNav;