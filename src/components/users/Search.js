import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');
    const onChange = event => setText(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter keyword', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }

    }
    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text"
                        value={text}
                        name="text"
                        placeholder="Search users..."
                        onChange={onChange} />
                    <input type="submit" name="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length > 0 && <button className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}>Clear</button>}

            </div>
        );
    }


export default Search;
