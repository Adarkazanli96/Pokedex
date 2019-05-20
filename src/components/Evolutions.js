import React from 'react'
import './Evolutions.less'

let evolutions = (props) => {

        let evolutions = props.evolutionchain.map((p, index) => {
            return <p>{p}</p>
        } )

        return(<div className = "evolutions">
                        {evolutions}
                </div>);
    
}

export default evolutions;