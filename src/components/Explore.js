import React, { useEffect, useState } from 'react'
import ExploreTable from './ExploreTable';
import { useNavigate } from 'react-router-dom';

export default function Explore(props) {
    const navigate=useNavigate();
    const [model,setModel]=useState([]);
    const [load,setLoad]=useState(false);


    const apiUrl="https://mocki.io/v1/ef17376b-c0d8-489a-b885-ccaa08fe3f99";

    async function callData(){
        await fetch(apiUrl).then((res)=>{
            res.json().then((res)=>{
                setModel(res)
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              })
        })
    }

    useEffect(()=>{
        setLoad(true);
        callData();
        setLoad(false);
    },[])

  return (
    <div className='explore'>
        <h2>
            Here are a few models you can learn about...
        </h2>
        <div>
            {load ? (<h1>loading...</h1>) : 
                <>
                    <ExploreTable model={model} />
                </>
                
            }
        </div>
    </div>
  )
}
