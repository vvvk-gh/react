import React from 'react'

function UserList() {
    let users = ['vamsi' ,'sai' ,'abhi'];
    return (
        <div>
            <h2>{users[0]}</h2>
            <h2>{users[1]}</h2>
            <h2>{users[2]}</h2>
        </div>
    )
}

export default UserList
