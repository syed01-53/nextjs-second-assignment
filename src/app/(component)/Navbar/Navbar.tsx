import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

let styleObject ={
  backgroundColor :'black',
  color:'white'
}
const Navbar =()=>{
return(
    <nav style={styleObject}>
    <Link href="./Home" className="logo">Xplore
        <i className="fab fa-staylinked"></i>kill
    </Link>
    <div className="nav-links" id="navLinks">
       
        <i className="fa fa-times" ></i>
        <ul>
          
            <li><Link href="./Home">Home</Link></li>
            <li><Link href="./Course">Course</Link></li>
            <li><Link href="./Blog">Blog</Link></li>
            <li><Link href="./About">About</Link></li>
            <li><Link href="./Contract">Contact</Link></li>
        </ul>
    </div>
    <i className="fa fa-bars" ></i>
    {/* <!-- Reposnive bar open and close --> */}
</nav>
)
}
export default Navbar