import React from 'react'

const heading = {
    fontSize : '70px',
    color : 'blue'
}  

function Inline() {
    return (
        <div>
            <h1 style = {heading} >Style Sheet</h1>
            <h1 className='error'> Error</h1>
            {/* <h1 className={styles.success}> Success </h1> */}
        </div>
    )
}

export default Inline
