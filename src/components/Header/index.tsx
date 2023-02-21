import React, { FC } from 'react'

import { NavLink } from 'react-router-dom';
import './styles.scss'

import { IHeaderProps } from './type';
import { CATEGORIES } from '@/routes';

import { ReactComponent as Filter } from '../../assets/icons/filter.svg'
import { ReactComponent as Search } from '../../assets/icons/search.svg'

const Header: FC<IHeaderProps> = () => {

    return (
        <header className="header">
            <nav className="header-left">
                {
                    CATEGORIES.map(category => (
                        <NavLink className="header-left__item" to={category.url}>{category.title}</NavLink>
                    ))
                }
            </nav>
            <div className="header-right-search">
                    <Search className="header-right-search__search"/>
                    <input className='header-right-search__input' type="text" placeholder='Search'/>
                    <Filter className="header-right-search__filter"/>   
            </div>
        </header>
    )
};

export default Header