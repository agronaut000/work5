import React from 'react';
import logo from '../../img/Logo Work5.png';
import css from './Menu.module.css'
import { ReactComponent as Home } from '../../img/дом.svg';
import { ReactComponent as Cart } from '../../img/тележка.svg';

const Menu = (props) => {
    return <div className={`${css.container} "container"`}> 
        <div className="row">
            <div className="col-auto">
                <img src={logo} />
            </div>
        </div>
        <div className="row">
            <div className="col-auto">
                <Home />
                Главная
            </div>
        </div>
        <div className="row">
            <div className="col-auto">
                <Cart fill='#6666CC' stroke='red' />
                Мои магазины
            </div>
        </div>
        <div className="row">
            <div className="col-auto">Промоматериалы</div>
        </div>
        <div className="row">
            <div className="col-auto">Статистика</div>
        </div>
        <div className="row">
            <div className="col-auto">Баланс</div>
        </div>
        <div className="row">
            <div className="col-auto">Персональные данные</div>
        </div>
        <div className="row">
            <div className="col-auto">FAQ</div>
        </div>
        <div className="row">
            <div className="col-auto">Техподдержка</div>
        </div>
        <div className="row">
            <div className="col-auto">Выход</div>
        </div>
    </div>
} 

export default Menu