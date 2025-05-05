import { Link } from "react-router-dom";

const SimpleTitle = ({ to, title }) => {
    return (
        <Link to={to} className="link">
            <h2 className="h2">{title}</h2>
        </Link>
    )
}

export default SimpleTitle;