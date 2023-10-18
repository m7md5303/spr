import React from 'react'

export default function Mekka({title,img,para}) {
    

    return (
        <div className='mekka'>
          
            <div className='mkcont'> <div className='cont'> <h1>{title}</h1>
                <p>{para}</p></div>
                <img src={img}/>
            </div>
        </div>
    )
}
