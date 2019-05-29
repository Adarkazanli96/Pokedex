import React from 'react'
import './ToggleSwitch.less'
import store from '../Store'

let ToggleSwitch = props => {
    let status;

    if(props.status){
        status = "On"
    }

    else{
        status = "Off"
    }

    return(
    <div>
        {props.title + status}
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round" onClick = {() => props.onClick()}></span>
            </label>
    </div>
    );
    
}

export default ToggleSwitch