import {FC, HTMLAttributes } from 'react'
import styles from './styles.module.scss';
export interface IRatesCellProps extends HTMLAttributes<HTMLTableCellElement> {
    isSelected:boolean
}

export const RatesCell:FC<IRatesCellProps> = ({isSelected, children}) => {
    
    return (
        <td className={isSelected?styles.selected:undefined}>{children}</td>
    )
}