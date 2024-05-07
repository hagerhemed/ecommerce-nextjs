import { useEffect, useState } from "react";

function Dashboard(){
    const [dashData,setDashData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        async function fetchingData(){
            const res = await fetch("https://fakestoreapi.com/products")
            const data =await res.json()
            setDashData(data[0])
            setIsLoading(false)

        }
        fetchingData()
    },[])
    if(isLoading) return <div>Loading...</div>
    else
    return(
        <>
        <div>
           Posts: {dashData.title}
           <br></br>
           Likes: {dashData.price}
            </div>
            </>
    )
}
export default Dashboard;