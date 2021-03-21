import './App.css';
import React, {useEffect, useState} from "react";

import {keyDown} from "./utils/keyDown";
import {APIgetData} from "./utils/API"
import {checkGamOver} from "./utils/checkGamOver"
import Header from "./Component/Header";



function App() {

    const [data, setData] = useState([
        {"x": 0, "y": 1, "z": -1, "value": 0},
        {"x": -1, "y": 1, "z": 0, "value": 0},
        {"x": 1, "y": 0, "z": -1, "value": 0},
        {"x": 0, "y": 0, "z": 0, "value": 0},
        {"x": -1, "y": 0, "z": 1, "value": 0},
        {"x": 1, "y": -1, "z": 0, "value": 0},
        {"x": 0, "y": -1, "z": 1, "value": 0}
    ]);
    let [serverUrl, setServerUrl] = useState("http://localhost:13337/")
    let [status, setStatus] = useState("playing")


    const embedData = (incomData) => {
        const copyData = JSON.parse(JSON.stringify(data))
        let tepmData = copyData.map(localData => {
            for (let i = 0; i < incomData.length; i++) {
                if (localData.x == incomData[i].x) {
                    if (localData.y == incomData[i].y) {
                        if (localData.z == incomData[i].z) {
                            return incomData[i]
                        }
                    }
                } else {
                    if (i == 2) {
                         return localData
                    }
                }
            }
            return localData
        })
            setData(tepmData)
        let currentStatus=checkGamOver(data)
        if (currentStatus){setStatus(currentStatus)}
     }

    const getInitialData = () => {
        APIgetData(serverUrl,[]).then((res) => {
            embedData(res.data)
        })
    }

      function handleKeyDown(event){
        const prevData = JSON.stringify(data)
        let playerTurn=keyDown(event,data)
        if (prevData!==JSON.stringify(playerTurn)){
            setData(playerTurn)
            computerTurn()
        }
    }

    const computerTurn=()=>{
        const filledArray=data.filter(row=> row.value!=0)
         APIgetData(serverUrl,filledArray).then((res) => {
             embedData(res.data)
             })
    }

    useEffect(()=>{ getInitialData()},[])
    useEffect(()=>{ document.addEventListener("keydown",handleKeyDown)
        return ()=> document.removeEventListener("keydown",handleKeyDown)
    },[data])


    return (
            <div className="App" >
                <div className={"body"} >
                    <Header setServerUrl={setServerUrl} status={status}/>
                    {data.map((cell, index) => {
                        return (
                            <div className={`container${index + 1}`} key={index}>
                                <div id="hexagon"
                                     data-x={cell.x} data-y={cell.y} data-z={cell.z} data-value={cell.value}
                                     style={{
                                         ...blockStyle,
                                          background: cell.value ? "green" : "red"

                                     }}

                                > {cell.value}  </div>
                            </div>
                        )
                    })}
                </div>

            </div>

    );
}

const blockStyle = {
    width: 107,
    height: 107,
    color: "yellow",
    background: "red",
    opacity: 0.5
}

export default App;
