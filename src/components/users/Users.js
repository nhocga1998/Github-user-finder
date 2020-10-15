import React, { useContext } from 'react';
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/GithubContext'



const Users = () => {
    const gitHubContext = useContext(GithubContext);

    const {users, loading} = gitHubContext
    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {users && users.map(user =>(
                    <UserItem key={user.id} user={user}/>
                    
                ))}
            </div>
        );
    }
        
}

Users.propTypes ={

}

const userStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
