import React from 'react'

export function TextComponent3({stock = true}){
    return(
        <>
        <center><h2> {stock === 0 ? 'No Hay Stock': 'HaY Stock'}</h2></center>
        </>
    )
}