import React from 'react'
import './Popup.less'

let popups = props =>{
    
        return(
                <div className = {"popup-container " + props.color}>
                        <div style = {{textAlign: "center", opacity: 1}} className = "content">
                        {props.content}
                        </div>

                </div>
        
        );
    
}

export default popups;