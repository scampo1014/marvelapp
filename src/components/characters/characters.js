import { useEffect, useState } from "react";
import md5 from 'md5';
import Character from "../character/character";

function Characters() {

    const[characters, setCharacters] = useState([]);

    useEffect(() => {
        if(!navigator.onLine){
            if(localStorage.getItem("characters") === null){
                setCharacters([])
            } else {
                setCharacters(localStorage.getItem("characters"));
            }
        } else {
            let ts = Date.now();
            const pubk = '607b05ca6d49194198e6c88299d78dd2'
            const privk = 'dfec55e4b8d36e51d42543be9e7a86ba50c8d059'

            let url = "https://gateway.marvel.com:443/v1/public/characters?";
            url += "ts=" + ts;
            url += "&apikey=" + pubk;
            url += "&hash=" + md5(ts+privk+pubk);

            fetch(url).then(res => res.json()).then(res => {
                setCharacters(res.data.results);
                localStorage.setItem("characters", res.data.results);
            })
        }
        
    }, [])

    return(
        <div>
            {
                characters.map(c => <Character key = { c.id } character = { c }/>)
            }
        </div>
    )
}

export default Characters;