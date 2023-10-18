import React from 'react'

export default function Flight({img,para}) {
    

    return (
        <div className='flight'>
            <div className='fcont'>
                <p>{para}</p>
                <img src={img}/>
            </div>
        </div>
    )
}
