import React, { useState } from "react"
function Bgcolor(){
    const[backgroundColor,setBackgroundColour]=useState("white")
    const bgc=(()=>{
        setBackgroundColour((oldcolor)=>oldcolor==="white"?"black":"white")
    })




    return(
        <div style={{backgroundColor:backgroundColor,height:"1000px",width:"100%"}}>
            <button onClick={bgc} id="btn">click me</button>
        </div>
    )
}
export default Bgcolor;