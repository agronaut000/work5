import React from 'react';
import css from './Header.module.css'
import { ReactComponent as Arrow } from '../../img/arrow.svg';

import { ReactComponent as Message } from '../../img/envelope.svg';
import { ReactComponent as Ellipse } from '../../img/Эллипс 2.svg';
import { ReactComponent as Ellipse_42 } from '../../img/Ellipse 42.svg';


const Header = (props) => {

    return <div className={`${css.header} container`}>
        <div className='row'>
            <div className={`${css.pageInfo} col-auto`}>
                Главная <Arrow /> Мои магазины
            </div>
            <div className={`${css.my_profile} col-auto row`}>
                <div className={`${css.msg} col-auto`}>
                    <Message className={css.message} />
                    <Ellipse className={css.ellipse} />
                </div>
                <div className={`${css.me} col-auto row align-items-center`} >
                    <Ellipse_42 className={`${css.ellipse_42} col-auto`}/>
                    <div className={css.circle}></div>
                    <div className={`${css.name} col`}>Максим Добжанский</div>
                </div>
            </div>
        </div>

    </div>
}

export default Header;