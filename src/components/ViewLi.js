import React from 'react'

function ViewLi({todolist}) {
    return (
        <>
            {todolist.map( 
                item => (
                    <li key={item.id}>{item.title}</li>
                )
            )}
        </>
    )
}

export default ViewLi
