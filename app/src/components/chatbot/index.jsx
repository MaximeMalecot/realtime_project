import React, { useEffect, useState } from "react";
import style from "./index.module.scss";

const ChatBot = ({close}) => {
    const [socket, setsocket ] = useState(null);
    const [messages, setMessages] = useState([]);

    return(
        <div className={style.chatbot}>
            <div className={style.chatbot_header}>
                <h2></h2>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default ChatBot;