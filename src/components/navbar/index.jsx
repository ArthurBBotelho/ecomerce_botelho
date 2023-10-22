import React from "react";
import Search from "../../image/icon/search.png";
import User from "../../image/icon/user.png";
import Shopping from "../../image/icon/shopping.png";

function navBar() {
    return (
        <div>
            <h1>Finestra Eyewear</h1>
            <a><img src={Search}></img></a>
            <a><img src={User}></img></a>
            <a><img src={Shopping}></img></a>
        </div>
    )
}