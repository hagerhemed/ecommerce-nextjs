function Index({news}){
    return(
        <div>
            {news.map((n)=><div key={n.id}> {n.name}</div>)}
        </div>
    )
}
export default Index;
export async function getServerSideProps(){
    const res = await fetch("http://localhost:1000/users")
    const data = await res.json()
    return{props:{news:data}}
}