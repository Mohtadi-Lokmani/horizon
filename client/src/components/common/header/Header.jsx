import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../../../Images/img1.png"
import "./Header.css"
export default function Header() {
  return (
    <>
    <header className="navvvv">
        <div className="navbar">
          <div className="logo">
            <img src={logo} className="img1" />
          </div>
          <div className='lien'></div>
    
      
      <ul className="ulheader">
        <CustomLink to="/" className="site-title">Acceuil</CustomLink>
        <CustomLink to="/Diplome" className="site-title">Formations Diplômantes</CustomLink>
        <CustomLink to="/continue" className="site-title"> Formations continue</CustomLink>
        <CustomLink to="/entreprise" className="site-title">Formations pour entreprises</CustomLink>
        <CustomLink to="/contact" className="site-title">Contact</CustomLink>
      </ul>
      </div>
        
      </header>
      </>
  )
  
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}