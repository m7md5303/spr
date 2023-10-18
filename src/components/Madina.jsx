import React from 'react'

export default function Madina({title,img,para}) {
    

    return (
        <div className='madina'>
            
            <div className='mdcont'><div className='cont'> <h1>{title}</h1>
                <p>{para}</p></div>
                <img src={img}/>
            </div>
        </div>
    )
}
