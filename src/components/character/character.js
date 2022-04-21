import { useState } from "react";

function Character(props) {

    const [ name ] = useState(props.character.name);
    const [ imgURLpath ] = useState(props.character.thumbnail.path);
    const [ imgURLext ] =  useState(props.character.thumbnail.extension);
    const [ description ] = useState(props.character.description);

    const renderImage = () => {
        let imgURL = imgURLpath + "." + imgURLext;
        return(
            <img src={ imgURL } alt={ name }/>
        )
    }

    return(
        <div>
            <h1>{name}</h1>
            { renderImage() }
            <p>{ description }</p>
        </div>
    )
}

export default Character;