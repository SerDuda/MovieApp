import { FC } from "react";

import './styles.scss';

import RightHeader from "./RightHeader/RightHeader";
import Continue from "./Continue/Continue";
import TopRated from "./TopRated/TopRated";
import Genres from "./Genres/Genres";

const RightAside: FC = () => {
    return (
        <aside className='right-aside'>
            <RightHeader/>
            <div className="right-aside-menu">
                <Continue/>
                <TopRated/>
                <Genres/>
            </div>
        </aside>
    )
};

export default RightAside