import './BigButton.scss'
import {Link} from 'react-router-dom'

export const BigButton = (props: BigButtonProps) => {
    return (
        <Link to={props.path}>
            <button className={"downloadButton"}>
                Get Quillnote
            </button>
        </Link>
    );
}

export interface BigButtonProps {
    path: string
}