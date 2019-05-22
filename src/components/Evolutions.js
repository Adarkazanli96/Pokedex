import React from 'react'
import './Evolutions.less'

let evolutions = (props) => {
        //console.log(props.evolutionChainImgURLs)

    // map images and put them before the evolutionnames below
let images = props.evolutionChainImgURLs.map((p, index) => {
                console.log(p);
                return <div className = "eitem">
                        <img className = "eimg" src = {p} alt = "new" key = {index}/>
                        <span className = "enames">{props.evolutionChainNames[index]}</span>
                        </div>
} )

    let evolutions = props.evolutionChainNames.map((p, index) => {
            return <span className = "evolution" key = {index}>{p}</span> 
    } )

        return(<div className = "allitems">
                        {images}
                 
                </div>);
    
}

export default evolutions;