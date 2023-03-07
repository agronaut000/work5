import React, { useState } from "react";
import { NavLink as Link } from 'react-router-dom';
import css from './Navbar.module.css'
import { ReactComponent as Home } from '../../img/дом.svg';
import { ReactComponent as Cart } from '../../img/тележка.svg';
import { ReactComponent as Megaphone } from '../../img/мегафон.svg';
import { ReactComponent as Diagram } from '../../img/диаграмма.svg';
import { ReactComponent as Wallet } from '../../img/кошелек.svg';
import { ReactComponent as Avatar } from '../../img/аватар.svg';
import { ReactComponent as Question } from '../../img/вопрос.svg';
import { ReactComponent as Garniture } from '../../img/гарнитура.svg';
import { ReactComponent as Signout } from '../../img/выход.svg';
import logo from '../../img/Logo Work5.png';
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: #7A7B7B;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-left: 4px solid transparent;
  &.active {
    color: #6666CC;
    border-left: 4px solid #6666CC;
    -webkit-box-shadow: inset 6px 0px 4px -6px #6666CC;
    -moz-box-shadow: inset 6px 0px 4px -6px #6666CC;
    box-shadow: inset 6px 0px 4px -6px #6666CC;
    > span {
      color: #343434;
    }
  }
`;
const Navbar = (props) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return <div className={`${css.navigation} container ${isNavExpanded ? `${css.navigation_menu} ${css.expanded}` : ''}`}>
      
      <div className='row'>
        <img src={logo} className={`${css.logo} col-auto`}></img>

        <button className={`${css.hamburger} col-auto`} onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${isNavExpanded ? `${css.navigation_menu} ${css.expanded}` : css.navigation_menu} row`}>
          <nav>
            <div>
              <div className={`container ${css.navMenu}`}>
                <div className='row'>
                  <NavLink to='/' activeStyle>
                    <Home /> <span>Главная</span>
                  </NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/my_shops' activeStyle>
                    <Cart /><span>Мои магазины</span>
                  </NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/promo' activeStyle><Megaphone /> <span>Промоматериалы</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/stats' activeStyle><Diagram /> <span>Статистика</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/balance' activeStyle><Wallet /> <span>Баланс</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/personal_data' activeStyle><Avatar /><span>Персональные данные</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/FAQ' activeStyle><Question /><span>FAQ</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/tech' activeStyle><Garniture /><span>Техподдержка</span></NavLink>
                </div>
                <div className='row'>
                  <NavLink to='/sign_out' activeStyle><Signout /><span>Выход</span></NavLink>
                </div>
              </div>
            </div>
          </nav>
      </div>
    </div>
}

export default Navbar