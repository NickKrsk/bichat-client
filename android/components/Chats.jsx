import React from "react";
// import { useHistory } from 'react-router-dom';

const chats = [
    {
        id: 1,
        title: 'M-Video'
    },        
    {
        id: 2,
        title: 'Mobilon'
    },
    {
        id: 3,
        title: 'Lenta'
    },
];

const Chats = (props) => {
    const history = useHistory();

    const handleClick = () => {
        console.log('click');
        history.push("/chat");
    }

    return(  
        <>      
        {chats.map(chat => 
            <button onClick={handleClick}>{chat.title}</button>
        )}  
        </>  
    );
}

export default Chats;