import { Button } from "antd";
import React, { useState, useEffect } from "react";

const random = Math.floor(Math.random() * 100) + 1;
const url = `https://api.jikan.moe/v4/characters/${random}/full`

export default function Anime() {
    
    const [anime, setAnime] = useState([]);

    console.log(random);
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setAnime(data.data.name);
        });
    },[]);

    return (
        <div className="m-auto w-1/2 text-center">
        
        <h1 className="m-1">Get a Random Character</h1>
        {anime}
        <br />
        <Button onClick={() => window.location.reload(false)} type="primary" className="m-1">Get a new character</Button>
        
        </div>
    );
}

 