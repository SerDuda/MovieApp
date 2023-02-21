import React, { FC } from "react";

import './styles.scss';
import { ReactComponent as Next } from '@/assets/icons/next.svg';
import { ReactComponent as Previous } from '@/assets/icons/previous.svg';
import { ReactComponent as MoreRight } from '@/assets/icons/more-right.svg';

import { ISlideTitle } from "./type";

const RightNavigation: FC<ISlideTitle> = ({title}) => {
    return (
        <div className='right-navigate'>
            <div className="navigate__title">{title}
                <div className="navigate-button">
                    <Previous className="navigate-button__previous"/>
                    <Next className="navigate-button__next"/>
                </div>
            </div>
            <div className="navigate-more">
                <span className="navigate-more__title">
                    See More
                </span>
                <div className="navigate-more__button">
                    <MoreRight/>
                </div>
            </div>
        </div>
    )
};

export default RightNavigation