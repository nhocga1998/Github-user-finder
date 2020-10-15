import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import * as types from '../types'

const GithubState = (props) =>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (text) => {
        setLoading();
        const res = await
          axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);

        dispatch({
            type: types.SEARCH_USERS,
            payload: res.data.items
        })
      }

    //Get User
    const getUser = async (username) => {
        setLoading();
        const res = await
          axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);
        dispatch({
            type: types.GET_USER,
            payload: res.data
        })
        
    
      }

    //Get Repos
    const getUserRepos = async (username) => {
        setLoading();
        const res = await
          axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);
        dispatch({
            type: types.GET_REPOS,
            payload: res.data
        })
      }

    //Clear user
    const clearUsers = () => dispatch({type: types.CLEAR_USERS})

    //Set Loading
    const setLoading = () => dispatch({ type: types.SET_LOADING })

    return <GithubContext.Provider 
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;