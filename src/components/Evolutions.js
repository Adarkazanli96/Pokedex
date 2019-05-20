import React from 'react'
import './Evolutions.less'

let evolutions = (props) => {

    // map images and put them before the evolutionnames below
        
    let evolutions = props.evolutionChainNames.map((p, index) => {
            return <span className = "evolution">{p}</span> 
    } )

        return(<div className = "evolution-list">
                        {evolutions}
                </div>);
    
}

export default evolutions;