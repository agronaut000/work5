import React from "react";
import css from './Shop.module.css'
import { ReactComponent as Pen } from '../../img/карандаш 1.svg';
import { ReactComponent as Cancel } from '../../img/cansel.svg';

const Shop = (props) => {
    return <tr>
        <td className={css.num}>{props.num}</td>
        <td className={css.name}>{props.name}</td>
        <td className={css.addres}>{props.addres}</td>
        <td className={css.action}>
            <button type="button" class={`${css.button} btn btn-success `}>
                <div className='row justify-items-start'>
                    <Pen className={`col-auto ${css.text}`}/><div className={`${css.text} col-auto`}>Редактировать</div>
                </div>
            </button>
            <button type="button" class={`${css.button_cancel} btn btn-secondary `}>
                <div className='row'>
                    <Cancel className={`col-auto ${css.text}`}/><div className={`${css.text} col-auto`}>Редактировать</div>
                </div>
            </button>
        </td>
    </tr>
}

export default Shop;