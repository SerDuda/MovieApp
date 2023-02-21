import React, {FC} from "react";

import {ReactComponent as AddIcon} from '@/assets/icons/add.svg'

import './styles.scss';
import { IButton } from "./type";

const Button: FC<IButton> = ({size, color, text}) => {
    return (
        <div className={`button button--${size} button--${color}`}>
            {
                size === 'drop' && color === 'filter' ?  (
                    <AddIcon/>
                ) : (
                    <span className="button__text">{text}</span>
                )
            }
        </div>
    )
};

export default Button