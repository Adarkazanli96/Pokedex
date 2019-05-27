import React from 'react'
import './Popup.less'

let popups = props =>{
    
        return(<div className = {props.color}>
                        {props.content}
                        <button onClick = {() => props.onClick()}>x</button>
        </div>);
    
}

export default popups;