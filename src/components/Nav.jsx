import {Link} from 'react-router-dom'
const Nav = () => {
    return (
    <nav className="navbar" id="navbar">
    <ul>
        <li>
        <Link to = '/' className="dropbtn">Home</Link>
            <div className="dropdown">
            <Link to = '/topics' className="dropbtn">Topics</Link>
            <div className="dropdown-content">
                <Link className="dropdown-links" to ='/topics/coding'>Coding</Link>
                <Link className="dropdown-links" to ='/topics/football'>Football</Link>
                <Link className="dropdown-links" to ='/topics/cooking'>Cooking</Link>
            </div>
            </div>
        </li>
        <li> <Link to = '/users'>Sign In</Link></li>
    </ul>
</nav>
)
}
export default Nav;