import React from 'react';
const ToolTip=(props)=>{
    const {tooltipAlign}=props;
    return(
        <div id="tooltip-container">
            <div id="tooltip-btn">
                Button
            </div>
            {tooltipAlign==="top" && 
                <div id="tooltip-content" style={{left:"15%",top:-60}}>
                    tooltip iz here
                </div>
            }
            {tooltipAlign==="right" && 
                <div id="tooltip-content" style={{left:320,top:-5}}>
                    tooltip iz here
                </div>
            }
            {tooltipAlign==="bottom" && 
                <div id="tooltip-content" style={{left:"15%"}}>
                    tooltip iz here
                </div>
            }
            {tooltipAlign==="left" &&  
                <div id="tooltip-content" style={{left:-240,top:-5}}>
                    tooltip iz here
                </div>
            }
        </div>
    )
}
export default ToolTip;