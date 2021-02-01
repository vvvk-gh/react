import React from 'react';
import TableRow from './TableRow';
function Table() {
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
    
    return <table border="1px">
            <tbody>
            {persons.map(person => <TableRow key ={person.id} perAttr = {person}/>)}
            </tbody>
        </table>
}

export default Table;