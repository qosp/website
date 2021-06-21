import './BigButton.scss'
import {Link} from 'react-router-dom'

export const BigButton = (props: BigButtonProps) => {
    return (
        props.external
            ? <a href={props.path} target={"_blank"} rel={"noreferrer"}>
                <button className={"download-button"}>
                    {props.text}
                </button>
            </a>
            : <Link to={props.path}>
                <button className={"download-button"}>
                    {props.text}
                </button>
            </Link>
    );
}

export interface BigButtonProps {
    text: string
    path: string
    external?: boolean
}