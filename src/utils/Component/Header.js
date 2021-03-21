import '../../App.css';
import React from "react";


function Header(props) {

     const selectServerURL=(event)=>{
        props.setServerUrl(event.target.value)
    }

    return (

                <div>
                    <div className={"header"}>
                        <span>RNG-server url</span>
                        <select id="url-server" onChange={(event)=>selectServerURL(event)}>
                            <option id="remote" value="//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud">Remote server</option>
                            <option id="localhost" value="http://localhost:13337/">Local server</option>
                        </select>
                        <div>
                            <span> Game Status: </span>
                            <span data-status="playing">{props.status}</span>
                        </div>
                    </div>
                </div>
    );
}


export default Header;
