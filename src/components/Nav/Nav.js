import React from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import { clearUser } from '../../ducks/reducer'
import { Link } from 'react-router-dom'
import Axios from 'axios';



function Nav(props) {
  console.log(props)  
    
  
if(props.location.pathname !== '/'){
return (
    <div>

        <button onClick={()=>{props.history.push('/dashboard')}}>Home</button>
        <button onClick={()=>{props.history.push('/new')}}>New Post</button>
        <h1>{props.username}</h1>
        <img src={props.img}/>

        <button onClick={()=> props.logout()}>Logout</button>
        
                Nav Functional Component 
    </div>
)}
return null

} 


const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id,
        username: reduxState.username,
        img: reduxState.img
    }
}

const mapDispatchToProps = {
updateUser,
clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)




