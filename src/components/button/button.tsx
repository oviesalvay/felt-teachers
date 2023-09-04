import { FC } from "react";
import '../button/button.scss';

interface btnAttributes {
    content: string
    onClick?: any
    className?: string
    id?: string
    type: any
}
interface linkAttributes {
    content: string
    onClick?: any
    className?: string
    id?: string
    type: any
}
export const Buttoned: FC<btnAttributes> = ({ content, onClick, className, id, type }) => {
    return (
        <div className={`${className} Buttoned`}>
            <button type={type} id={id} onClick={onClick}>{content}</button>
        </div>
    )
}
export const ConnectButton: FC<linkAttributes> = ({ content, onClick, type, id, }) => {
    return (
        <button className="connectbutton" type={type} id={id} onClick={onClick}>{content}
        </button>
    )
}
export const SignButton: FC<linkAttributes> = ({ content, onClick, id, }) => {
    return (
        <button className="signbutton" id={id} onClick={onClick}>{content}
        </button>
    )
}