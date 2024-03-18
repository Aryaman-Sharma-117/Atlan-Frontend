import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailsFormat from './DetailsFormat';

export default function Details() {
    const {name}=useParams();

    const [model,setModel]=useState();
    const [load,setLoad]=useState(true);

    const apiUrl="https://mocki.io/v1/ef17376b-c0d8-489a-b885-ccaa08fe3f99";

    async function callData(){
        await fetch(apiUrl).then((res)=>{
            res.json().then((res)=>{
                res.map((e)=>{
                    if(e.name===name){
                        setModel(e)
                    }
                })
            }).then(()=>{
                setLoad(false)
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              })
        })
    }

    useEffect(()=>{
        callData();
    },[name])
    
  return (
    <div>
        {load ? (<h1>loading...</h1>) : 
            <DetailsFormat model={model}/>
        }
    </div>
  )
}
