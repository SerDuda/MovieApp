import React, { FC } from "react";

import './styles.scss';

import RightNavigation from "../RightNavigation/RightNavigation";

const Genres: FC = () => {
    return (
        <div className="aside-menu-genres">
            <RightNavigation title="Genres" />
            <div className="menu-genres-slider">
                <div className="seggest-genres">
                    <div className="seggest-genres-window genres-drama">
                        <p className="drama__title">Drama</p>
                    </div>
                    <div className="seggest-genres-window__right genres-triller"></div>
                </div>
                <div className="seggest-genres">
                    <div className="seggest-genres-window genres-sitcom">
                        <p className="sitcom__title">Sitcom</p>
                    </div>
                    <div className="seggest-genres-window__right genres-superhero"></div>
                </div>
            </div>
        </div>
    )
}

export default Genres