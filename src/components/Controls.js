import React from 'react'
import './Controls.less'

let controls = props =>{
    
        return(<div className = "pokedex-controls">
                        <div className = "triangle down" onClick = {() => props.onClick(-320)}></div>
                        <div className = "triangle up" onClick = {() => props.onClick(320)}></div>
        </div>);
    
}

export default controls;