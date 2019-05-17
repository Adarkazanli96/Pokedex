import React from 'react'
import './Controls.less'

let controls = props =>{
    
        return(<div className = "pokedex-controls">
                        <div className = "triangle down" onClick = {() => props.onClick(8)}></div>
                        <div className = "triangle up" onClick = {() => props.onClick(-8)}></div>
        </div>);
    
}

export default controls;