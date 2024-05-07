import { useRouter } from "next/navigation"

function Error(){
    const router=useRouter()
    const handleRouting=()=>{
        router.push("/home/products")
    }
    return(
        <>
        <div className="d-flex justify-content-center container flex-column">
        <div className="text-center mt-5">Not Found</div>
        <br></br>
        <button className="btn btn-dark" onClick={handleRouting}>go to products</button>
        </div>
        </>
    )
}
export default Error;
Error.getLayout=function pageLayout(page){
    return<>{page}</>
}