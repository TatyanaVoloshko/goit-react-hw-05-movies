import { Link } from "react-router-dom";

function Header () {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Movies'>Movies</Link>
        </div>
    )

}

export default Header;