import Link from "next/link"
import {useSession} from "next-auth/react"


function NavBar(){

  const {data:session}= useSession()
  if(session) return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Ecommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" href="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/home/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/products">Add Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/api/auth/signin">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
    else{
      return(
      <>
      <nav className="navbar navbar-expand-lg bg-dark">
<div className="container-fluid">
  <a className="navbar-brand text-light" href="#">Ecommerce</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link text-light" href="/home/products">Products</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-light" href="/products">Add Product</Link>
        </li>
      <li className="nav-item">
        <Link className="nav-link text-light" href="/api/auth/signin">Sign in</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" href="/api/auth/signout">Sign Out</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
      </>
      )

    }
}
export default NavBar