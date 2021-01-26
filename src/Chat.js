import React, { useState, useEffect } from 'react'
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticon from "@material-ui/icons/InsertEmoticon"
import { AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reviever"}`}>
                    <span className="chat__name">
                        codelifee
                    </span>
                    Hello Guys
                    <span className="chat__timestamp">
                        3:52pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text"/>
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>    
        </div>
    )
}

export default Chat
