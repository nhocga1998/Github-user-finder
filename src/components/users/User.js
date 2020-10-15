import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import check from '../../image/check.png'
import multiply from '../../image/multiply.png'
import GithubContext from '../../context/github/GithubContext'

const User = ({ match}) => {
    const gitHubContext = useContext(GithubContext);
    const {user, loading, getUser,repos, getUserRepos} = gitHubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, [])

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = user;

        if (loading) {
            return <Spinner />
        }
        return <Fragment>
            <Link to="/" className="btn btn-light">
                Back to search
            </Link>
            Hireable: {''}
            {hireable ? <img src={check} style={{ height: "20px", width: "20px" }} />
                : <img src={multiply} style={{ height: "20px", width: "20px" }} />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{ width: '150px' }} />
                    <h1> {name} </h1>
                    <p> Location: {location} </p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h3> Bio </h3>
                        <p> {bio} </p>
                        </Fragment> )}
                <a href={html_url} className="btn btn-dark my-1" >
                     Visit GitHub Profile </a>
                     <ul>
                         <li>
                             {login && <Fragment>
                                 <strong>Username: </strong> {login}
                                 </Fragment>}
                         </li>
                         <li>
                             {company && <Fragment>
                                 <strong>Company: </strong> {company}
                                 </Fragment>}
                         </li>
                         <li>
                             {blog && <Fragment>
                                 <strong>Website: </strong> {blog}
                                 </Fragment>}
                         </li>
                     </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary" style={{display:"inline"}} >Follower: {followers} </div>
                <div className="badge badge-success" style={{display:"inline"}}>Following: {following} </div>
                <div className="badge badge-danger" style={{display:"inline"}}>Public repos: {public_repos} </div>
                <div className="badge badge-dark" style={{display:"inline"}}>Public Gist: {public_gists} </div>
            </div>

            <Repos repos={repos} />
        </Fragment>


    }




export default User;
