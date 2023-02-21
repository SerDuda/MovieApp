import React, {FC} from "react";

import AsideMenu from '@/components/LeftAside/AsideMenu'

import {ReactComponent as Logo} from "@/assets/icons/logo.svg"
import ROUTES from "@/routes";

import { NavLink } from "react-router-dom";

import './styles.scss';
import { ROUTER_URLS } from "@/routes/type";

const LeftAside: FC = () => {
    return (
        <aside className='left-aside'>
            <NavLink to={ROUTER_URLS.HOME} className="left-aside__logo">
                <Logo/>
            </NavLink>
            <div className="aside-nav left-aside-nav">
                {ROUTES.map(route => {
                    return (
                        <AsideMenu route={route} key={route.label}/>
                    )
                })}
            </div>
        </aside>
    )
};

export default LeftAside