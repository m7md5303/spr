import React from 'react'

export default function Khedma({img,para}) {
    

    return (
        <div className='khedma'>
            <div className='kcont'>
                <p>{para}</p>
                <img src={img}/>
            </div>
        </div>
    )
}
