/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

function FilterTableItems() {

    const [inp,setInp]=useState('')

    useEffect(() =>{

        filter()

        return()=>{
            console.log("Component Unmounted");
        }
        
    },[inp])

    const filter = () =>{

        const table=document.getElementById("table")
        const rows=table.querySelectorAll("tbody tr")
        
        // Filter items based on the Player name :)
        if((inp>='a' && inp<='z') || inp===''){
            console.log('Filter items based on the Player name');
            for(let i=0;i<rows.length;i++)
            {
                const td=rows[i].getElementsByTagName("td")[1]
                
                const inpUpper=inp.toLowerCase()
                const tdLower=td.innerText.toLowerCase()

                if(tdLower.indexOf(inpUpper)>=0)
                    rows[i].style.display=""
                else
                    rows[i].style.display="none"
            }
        }
        
        // Filter items based on the Jersey Number :)
        else{
            console.log('Filter items based on the Jersey Number');
            for(let i=0;i<rows.length;i++)
            {
                const td=rows[i].getElementsByTagName("td")[0]
                const text=td.textContent
                
                if(text.indexOf(inp)>=0)
                    rows[i].style.display=""
                else
                    rows[i].style.display="none"
            }
        }

    }

    return (
        <div className='text-center container col-6'>
            FilterTableItems
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
            <table className='table table-bordered table-hover' id='table'>
                <thead>
                    <tr>
                        <th>Jersey No</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>45</td>
                        <td>Rohit</td>
                        <td>10k</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Virat</td>
                        <td>12k</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Kl Rahul</td>
                        <td>8k</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Gill</td>
                        <td>3k</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>MS Dhoni</td>
                        <td>9k</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Jadeja</td>
                        <td>7k</td>
                    </tr>
                    <tr>
                        <td>63</td>
                        <td>Suryakumar yadav</td>
                        <td>4k</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Jasprit Bhumrah</td>
                        <td>2k</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FilterTableItems