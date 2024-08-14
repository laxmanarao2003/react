import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchApi() {

    const [data,setData]=useState([])

    const URL='https://jsonplaceholder.typicode.com/todos/'

    useEffect(()=>{

        
        return()=>{
            console.log('component unmounted')
        }
    })


    // GENERAL Method to fetch data :)
    // const getData = () =>{
    //     axios.get(URL)
    //     .then((result)=>{
    //         setData(result.data)
    //         console.log('fetched data successfully')
    //     })
    //     .catch((err)=>{
    //         console.log('failed to get data')
    //     })
    // }

    // Fetch the Data
    const getData=async()=>{
        try {
            const result=await axios.get(URL)
            setData(result.data)
        }
        catch (error) {
            console.log('Error getting data')
        }
    }

    // Post the Data
    const postData=async()=>{
        try {
            const result=await axios.post(URL,{userId:'45',title:'Rohit'})
            // setData(result.data)
            console.log(result)
        }
        catch (error) {
            console.log('Error getting data')
        }
    }

    // Put the Data
    const putData=async()=>{
        try {
            const result=await axios.put(`${URL}/5`,{userId:'45',title:'Rohit'})
            // setData(result.data)
            console.log(result)
        }
        catch (error) {
            console.log('Error getting data')
        }
    }

    // Delete the Data
    const deleteData=async()=>{
        try {
            const result=await axios.delete(`${URL}/5`,{userId:'45',title:'Rohit'})
            // setData(result.data)
            console.log(result)
        }
        catch (error) {
            console.log('Error getting data')
        }
    }

    return (
        <div className='text-center container'>
            FetchApi
            <br/>
            {/* Fetch the Data */}
            <button className='btn btn-primary my-3' onClick={()=>getData()}>click to fetch data</button>
            <br/>
            {/* Post the Data */}
            <button className='btn btn-primary my-3' onClick={()=>postData()}>click to Post data</button>
            <br/>
            {/* Put the Data */}
            <button className='btn btn-primary my-3' onClick={()=>putData()}>click to Put data</button>
            <br/>
            {/* Delete the Data */}
            <button className='btn btn-primary my-3' onClick={()=>deleteData()}>click to Delete data</button>
            <ul className='list-group mt-3'>
                {
                    data.map((data)=>{
                        return <li className='list-group-item text-start' key={data.id}>{data.id} - {data.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FetchApi