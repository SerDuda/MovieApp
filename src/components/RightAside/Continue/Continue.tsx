import React, { FC } from "react";

import RightNavigation from "../RightNavigation/RightNavigation";

import './styles.scss';
import Button from "../../UI/Button";

import Wanda from '@/assets/images/wandavision.jpg';
import ContinueRight from '@/assets/images/continue-right.jpg'

const Continue: FC = () => {
    return (
        <div className="aside-menu-continue">
            <RightNavigation title="Continue" />
            <div className="menu-continue-slider">
                <div className="continue-slider-suggest">
                    <div className="suggest-main">
                        <div className="suggest-main__img">
                            <img className="suggest-main__img-img"
                                src={Wanda}
                                alt='Wanda' />
                        </div>
                        <div className="suggest-main__info">
                            <div className="suggest-main__title">WandaVision</div>
                            <div className="suggest-main__discription">1 Episode left</div>
                            <span className="suggest-main__border"></span>
                        </div>
                    </div>
                    <div className="suggest-button">
                        <Button className="suggest-button__drop" size={'dropbutton'} color={'filter'} text={'Drop'} />
                        <Button className="suggest-button__watch" size={'small'} color={'primary'} text={'Watch'} />
                    </div>
                </div>
                <div className="continue-slider-suggest second__suggest">
                    <div className="suggest-main">
                        <div className="suggest-main__img">
                            <img className="suggest-main__img-img"
                                src={ContinueRight}
                                alt='cartoon' />
                        </div>
                    </div>
                    <div className="suggest-button">
                        <Button className="suggest-button__drop" size={'dropbutton'} color={'filter'} text={'Drop'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Continue