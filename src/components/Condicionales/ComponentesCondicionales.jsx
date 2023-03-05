import React from 'react'

export function TextComponent({stock = false, id}){
    return(
        <>
        <center><h2> {stock ? `Su Id de orden es: ${id}`: 'No'}</h2></center>
        </>
    )
}