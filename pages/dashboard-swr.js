import useSWR from "swr"


    const fetcher = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products")
        const data =await res.json()
       return data[0]
    }


const DashboardSwr=() =>{
    const{data,error}=useSWR("dashboard",fetcher);
    if(error) return <div>failed to load</div>
    if(!data) return <div>Loading...</div>
    else
    return(
        <>
        <div>
            <h1>dashboard-swr</h1>
           Title: {data.title}
           <br></br>
           Price: {data.price}
            </div>
            </>
    )
}
export default DashboardSwr;