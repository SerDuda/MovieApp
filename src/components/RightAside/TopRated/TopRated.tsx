import { FC } from "react";

import RightNavigation from "../RightNavigation/RightNavigation";

import './styles.scss';
import Button from "../../UI/Button";

const TopRated: FC = () => {
    return (
        <div className="aside-menu-top-rated">
            <RightNavigation title="Top Rated" />
            <div className="menu-topRated-slider">
                <div className="topRated-slider-suggest">
                    <div className="topRated__title">Supernatural</div>
                    <div className="topRated__discription">320 Ep</div>
                    <div className="topRated__genre">Horror, Fantasy</div>
                    <div className="topRated-button">
                        <Button className="topRated-button__drop" size={'drop'} color={'filter'} />
                        <Button className="topRated-button__watch" size={'small'} color={'primary'} text={'Watch'} />
                    </div>
                </div>
                <div className="topRated-slider-suggest right-bgc">
                    <div className="topRated__title">Rick</div>
                    <div className="topRated__discription">320 Ep</div>
                    <div className="topRated-button">
                        <Button className="topRated-button__drop" size={'dropbutton'} color={'filter'} text={'Drop'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRated