import React from 'react'
import { evento } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import image from "../../src/simpsons.jpeg"
import '../App.css'

export const Landing = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-black flex flex-col items-center h-full '>
            <img className='mt-4 h-2/6 w-5/6' src={image} alt="" />

            <button onClick={() => navigate("/quiz")} className='mt-2 w-2/4 bg-black border-yellow-500 p-1 shadow shadow-yellow-500 font-mono text-yellow-500 border-2 ml-2 hover:bg-yellow-500 hover:border-black hover:text-black'>Jugar</button>

        </div>
    )
}
