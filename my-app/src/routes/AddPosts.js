import React from 'react';
import {useState} from 'react';


export const AddPosts = ({set}) => {

    const [getID, setID]    = useState('');
    const [getName, setName]  = useState('');
    const [getText, setText]  = useState('');

return (

<>
<h3> AddPosts </h3>


    <div>
        <input
            type="text"
            placeholder="PostID"
            value={getID}
            onChange={e => setID(e.target.value)}
        />
    </div>
    <div>
        <input
            type="text"
            placeholder="Username"
            value={getName}
            onChange={e => setName(e.target.value)}
        />
    </div>
    <div>
        <input
            type="text"
            placeholder="Text"
            value={getText}
            onChange={e => setText(e.target.value)}
        />
    </div>

    <button onClick={(e) => {
    
    
    fetch('http://localhost:8888/create', {method: 'POST', body: `postID=${getID}&username=${getName}&text=${getText}`, headers: {'Content-type': 'application/x-www-form-urlencoded'}})
    
    .then(fetch('http://localhost:8888/read') 
        .then(response => response.json())
        .then(response => set(response))
        .then(alert(`ID: ${getID}, Name: ${getName}, Text: ${getText}`))
        );
    
} 
    }> Submit</button>


</>
);


}