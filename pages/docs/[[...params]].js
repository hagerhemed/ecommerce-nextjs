import { useRouter } from "next/router"

function Params(){
    const router=useRouter()
    const {params=[]}=router.query
    console.log(router.query)

    if(params.length==1)
    return <div>hello {params[0]}</div>
    else if(params.length==2){
    return <div>hello {params[0]} {params[1]}</div>}
    return(
        <h1>  hi</h1>
    )
}
export default Params