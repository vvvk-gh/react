import React from 'react';

function TableRow(props){
  
    let {perAttr} = props;
   //we can also use <> </> instead of <React.Fragment> </React.Fragment>
    return <React.Fragment>
        <tr>
            <td>{perAttr.name}</td>
            <td>{perAttr.age}</td>
            <td>{perAttr.occupation}</td>
        </tr>
        </React.Fragment>
  
    
}

export default TableRow;