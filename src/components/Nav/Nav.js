import React, { Component } from 'react';


export default function Nav(props) {
if(props.location.pathname !== '/'){
return (
    <div>
        <button onClick={()=>{props.history.push('/dashboard')}}>Home</button>
        <button onClick={()=>{props.history.push('/post/:postid')}}>New Post</button>
        <button onClick={()=>{props.history.push('/')}}>Log Out</button>
                Nav Functional Component 
    </div>
)}
return null

} 


