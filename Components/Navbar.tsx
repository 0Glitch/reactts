import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Button, BottomNavigationAction, BottomNavigation} from '@mui/material'
import Chat from '@mui/icons-material/Chat';

import Groups from '../src/Groups'
import Chats from '../src/Index'
import '../src/css/Navbar.css'

export default function Navbar({active}) {

return (
  <nav className="nav">

  <div className="nav-body">
   <h2>Swipe</h2>
    <Link className={active === '/' && 'active'} to="/">Chats</Link>
    <Link className={active === '/groups' && 'active'} to="/groups">Groups   </Link>
    </div>
  </nav>
)
    }