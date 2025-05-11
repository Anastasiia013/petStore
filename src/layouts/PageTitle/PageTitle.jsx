import { Link } from "react-router-dom";

export const SimpleLinkTitle = ({ to, title }) => {
    return (
        <Link to={to} className="title">
            <h2 className="h2">{title}</h2>
        </Link>
    )
}

export const SimpleTitle = ({ title }) => {
    return (
        <div className="title">
            <h2 className="h2">{title}</h2>
        </div>
    )
}