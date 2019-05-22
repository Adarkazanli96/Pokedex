import React from 'react'
import './Evolutions.less'

let evolutions = (props) => {

        let pokemon = props.evolutionChainImgURLs.map((p, index) => {
                return <div className = "evo-pokemon" key = {index}>
                        <img className = "evo-image" src = {p} alt = "new" key = {index}/>
                        <span className = "evo-name">{props.evolutionChainNames[index]}</span>
                        </div>
} )

        return(<div className = "evo-chain">
                        {pokemon}
                </div>);
    
}

export default evolutions;