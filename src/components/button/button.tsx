import { FC } from "react";
import '../button/button.scss';

interface btnAttributes{
    content: string
    onClick?: any
    className?: string
    id?: string
    type:any
}
interface linkAttributes{
    content: string
    onClick?: any
    className?: string
    id?: string
    type:any  
}
export const Button: FC<btnAttributes>=({content, onClick, className, id, type})=>{
    return(
        <div className={`${className} button`}>
            <button type={type} id={id} onClick={onClick}>{content}
            </button>
        </div>
    )
}
export const ConnectButton: FC<linkAttributes>=({content, onClick, className, id, type})=>{
    return(
        <div className={`${className} connectbutton`}>
            <button type={type} id={id} onClick={onClick}>{content}
            </button>
        </div>
    )
}