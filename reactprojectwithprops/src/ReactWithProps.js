import React from 'react'
const ReactWithProps = (props) => {
    
    return(
            <div>
                <h1> Welcome {props.name}</h1>
                {props.children}
            </div>
    )
}
export default ReactWithProps
