import React, { useState } from 'react'

/**
 * Promises accepts 2 parameters Resolve & reject
 * 
 * 1.pending -> when the promise object is pending the result is undefined 
 * 2.fulfilled -> when the promise object is fulfilledthe result is value
 * 3.rejected -> when the promise object is rejected the result is an error
 * 
 */

function PromisesFunc() {

    const [subscribed,setSubscribed]=useState(false)
    const [watched,setWatched]=useState(true)
    const [liked,setLiked]=useState(false)

    const start=()=>{

        // general promise method :)
        // const subscribe=new Promise((resolve,reject)=>{
        //     if(subscribed)
        //         resolve("user subscribed")
        //     else
        //         reject("user not subscribed")
        // })
        // subscribe.then((result)=>{
        //     console.log(result)
        // }).catch((err)=>console.log(err))

        const subscriber1=new Promise((resolve,reject)=>{
            if(subscribed)
            {
                resolve({
                    userId:701,
                    name:'Bharat',
                    desc:'Bharat subscribed'
                })
            }
            else if(watched)
            {
                resolve({
                    userId:701,
                    name:'Bharat',
                    desc:'Bharat watched successfully'
                })
            }
            else if(liked)
            {
                resolve({
                    userId:701,
                    name:'Bharat',
                    desc:'Bharat liked successfully'
                })
            }
            else
                reject("user not subscribed,watched and liked")
        })

        const subscriber2=new Promise((resolve, reject)=>{
            if(subscribed)
            {
                resolve({
                    userId:704,
                    name:'Mahesh',
                    desc:'Mahesh subscribed'
                })
            }
            else if(watched)
            {
                resolve({
                    userId:704,
                    name:'Mahesh',
                    desc:'Mahesh watched successfully'
                })
            }
            else if(liked)
            {
                resolve({
                    userId:704,
                    name:'Mahesh',
                    desc:'Mahesh liked successfully'
                })
            }
            else
                reject("user not subscribed,watched and liked")
        })

        Promise.all([subscriber1,subscriber2])
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>console.log(err))
    }

    const subscribers=()=>{
        return new Promise((resolve, reject)=>{
            if(!subscribed)
            {
                resolve({
                    name:'Rohit',
                    desc:'Rohit Not subscribed'
                })
            }
            else
                reject("user subscribed")
        })
    }

    // Async makes a function to return a promise :)
    const asyncFunc=async()=>{
        console.log("First statement")

        // Await makes a function to wait for a promise :)
        const result = await subscribers()
        console.log(result)

        console.log("Third statement")
    }

    return (
        <div className='text-center'>
            PromisesFunc
            <br/>
            {/* Promises */}
            <button className='btn btn-primary my-4' onClick={()=>start()}>Subscribe</button>
            <br/>
            {/* Async & Await */}
            <button className='btn btn-primary' onClick={()=>asyncFunc()}>asyncFunc</button>
        </div>
    )
}

export default PromisesFunc