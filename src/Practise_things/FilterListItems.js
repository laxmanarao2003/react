/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from "jquery"

function FilterListItems() {
    const [inp,setInp]=useState("")

    const items=document.querySelectorAll('li a')

    useEffect(()=>{
        
        filter()

        return()=>{
            console.log(98979);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inp]) 

    const filter=()=>{

        items.forEach((item)=>{
            item.classList.add('text-decoration-none');        
        })
        
        console.log("filter called");
        const ul=document.getElementById("listitems")
        const liItems=ul.querySelectorAll('li')

        for(let i=0; i<liItems.length; i++)
        {
            const ele=liItems[i].getElementsByTagName("a")[0]
            
            const inpUpper=inp.toUpperCase()
            const eleUpper=ele.innerText.toUpperCase()

            if(eleUpper.indexOf(inpUpper)>=0)
                liItems[i].style.display=""
            else
                liItems[i].style.display="none"
            
        }
    }

    return (
        <div className='text-center container col-6'>
            FilterListItems
            <div className='form-floating '>
                <input 
                    type="text"
                    className='form-control'
                    id='input'
                    name='input'
                    value={inp}
                    placeholder=''
                    onChange={(e)=>setInp(e.target.value)}
                />
                <label htmlFor='name'>Filter Items</label>
            </div>
            <ul className='list-group' id='listitems'>
                <li className='list-group-item'><a href='#' className=''>Rohit</a></li>
                <li className='list-group-item'><a href='#' className=''>Virat</a></li>
                <li className='list-group-item'><a href='#' className=''>Gill</a></li>
                <li className='list-group-item'><a href='#' className=''>SKY</a></li>
                <li className='list-group-item'><a href='#' className=''>Dhoni</a></li>
                <li className='list-group-item'><a href='#' className=''>Jadeja</a></li>
                <li className='list-group-item'><a href='#' className=''>Kl Rahul</a></li>
                <li className='list-group-item'><a href='#' className=''>Bhumrah</a></li>
                <li className='list-group-item'><a href='#' className=''>Shami</a></li>
            </ul>
        </div>
    )
}

export default FilterListItems