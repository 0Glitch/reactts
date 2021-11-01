import React from "react";
import {Avatar, Card, CardActionArea, CardContent, CardHeader} from '@mui/material';

import {data} from '../data';
import Navbar from '../Components/Navbar';
import './css/Chats.css';

const defaultimg = 'https://media.discordapp.net/attachments/854674373134778388/900732907881127976/image_downloader_1634821718366.jpg';

export default () => {

  return (
    <>
      <Navbar active="/" />
      <Chats />
    </>
  )
} 

const Chats = ()=>{

  return (
    <>
{data.map((user)=>{
  return <Chat {...user} /> 
})}
    </>
  )
}



const Chat = ({profile, name, lastmsg}) =>{

  return (
    <>
      <div className="card">
    
      <span className="card-head">
      <img alt={name} src={profile || defaultimg} />
        <span className="name">{name}</span></span>
<span className="msg">{lastmsg}</span>
    </div>

    </>
   )
}

