import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
    <nav>
        <Link to="/">Home</Link>
        <Link to="/modal">Modal component</Link>
        <Link to="/dynamic">Dynamic inputs component</Link>
        <Link to="/sticky">Add sticky note</Link>
    </nav> );
}
export default Navbar