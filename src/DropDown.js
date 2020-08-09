import React from 'react';

const DropDown=(props)=>{
    const {setPosition}=props;
    return(
        <div id="drop-down">
            <div id="drop-down-btn">
                Set Position
            </div>
            <div id="drop-down-content">
                <div className="btn" onClick={()=>setPosition("top")}>Top</div>
                <div className="btn" onClick={()=>setPosition("right")}>Right</div>
                <div className="btn" onClick={()=>setPosition("bottom")}>Bottom</div>
                <div className="btn" onClick={()=>setPosition("left")}>Left</div>
            </div>
        </div>
    )
}
export default DropDown;