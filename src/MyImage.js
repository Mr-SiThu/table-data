import React from 'react'

const MyImage = props => {
    const url = props.url
    return (
        <div className="p-1">
            <img className="border rounded border-primary" src={url} alt="image"  />
        </div>
        
    )
    
}


export default MyImage