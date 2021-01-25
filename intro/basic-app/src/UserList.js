import React from 'react'

function UserList() {
    let users = ['vamsi' ,'sai' ,'abhi'];
    let persons = [
        {id: 1,
         name : 'vamsi',
         age : 23,
         occupation : 'Software Engineer'
        },
        {
            id: 2,
            name : 'abhi',
            age : 27,
            occupation: 'Software Engineer'
        },
        {
            id :3,
            name : 'sai',
            age : 24,
            occupation : 'Software Engineer'
        },
    ];
    return (
        <div>
            {/* <h2>{users[0]}</h2>
            <h2>{users[1]}</h2>
            <h2>{users[2]}</h2> */}
            {/* {users.map(user => <h2>{user}</h2>)} */}
            {persons.map(person => `Hi all my name is ${person.name} and i'm ${person.age} yrs old and I'm a ${person.occupation}`)}
        </div>
    )
}

export default UserList
