import React, { FC } from "react";
import { IPopularProps } from "./type";
import './style.scss'
import {PopularItem} from '@/components'

const Popular: FC<IPopularProps> = ({ items, classname }) => {
    return (
        <div className={`popular ${classname}`}>
            <h2 className="popular__title">Popular on TinyMovies</h2>
            <div className="popular-items">
                {items.map(item => {
                    return (
                        <PopularItem {...item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular