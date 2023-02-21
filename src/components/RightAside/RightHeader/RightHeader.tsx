import React, { FC } from "react";

import { ReactComponent as Notification } from '@/assets/icons/Notification3.svg'
import { ReactComponent as More } from '@/assets/icons/more.svg'
import Profile from '@/assets/images/profile.jpg';

import './styles.scss';

const RightHeader: FC = () => {

    return (
        <div className="right-aside-header">
            <div className="header-notification">
                <Notification className="header-notification__component" />
            </div>
            <div className="header-user">
                <div className="header-user__title">Samantha</div>
                <div className="header-user__more"><More /></div>
                <img className="header-user__profile"
                    src={Profile}
                />
            </div>
        </div>
    )
}

export default RightHeader