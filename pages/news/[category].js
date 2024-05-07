function Category({newss}){
    return(
        <>
        <div>
            {newss.map((n)=><div key={n.id}>{n.name}</div>)}
        </div>
        </>
    )
}
export default Category;
export async function getServerSideProps(context){
    const {name} = context.params
    const res = await fetch(`http://localhost:1000/users?name=${name}`)
    const data = await res.json()
    return{props:{newss:data}}
}