import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import css from './New_shop.module.css';

import { ReactComponent as Warning } from '../../img/warning.svg';
import { ReactComponent as Cancel } from '../../img/cansel1.svg';



const New_shop = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
            <button type="button" class={`${css.button} btn btn-success `}  onClick={handleShow}>
                <div className='row justify-items-start'>
                {/* <span className={`${css.plus}`}>+</span>
                <span class={`${css.text}`}>Создать свой магазин</span> */}
                    <div className={`${css.plus} col-1`}>+</div><div class={`${css.button_text} col-10`}>Создать свой магазин</div>
                </div>
            </button>

            <div className={`${css.modal} ${show ? css.modal_visible : ''}`}>
                <div className={`${css.container} container`}>
                    <div className={`${css.create_shop} row`}>
                        <div className='col-auto'>
                            Создать магазин
                        </div>
                        <div className='col-auto'>
                            <Cancel onClick={handleClose}/>
                        </div>
                    </div>
                    <div className={`${css.template} row`}>
                        <div className='col-6'>
                            <div className={`${css.robotoMedium} row`}>
                                Шаблон
                            </div>
                            <div className={`${css.robotoRegular} row`}>
                                <select className={css.selectTemplate}>
                                    <option selected value='1'>Стандартный</option>
                                    <option value='2'>Красивый</option>
                                    <option value='3'>Оригинальный</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className={`${css.robotoMedium} ${css.color_scheme} row`}>
                                Цветовая схема
                            </div>
                            <div className={`${css.robotoRegular} ${css.color_scheme} row`}>
                                <select className={css.selectTemplate}>
                                    <option selected value='1'>Классическая</option>
                                    <option value='2'>Красивая</option>
                                    <option value='3'>Оригинальная</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={`${css.robotoMedium} row ${css.domen}`}>
                        Домен
                    </div>
                    <div className={`row ${css.input_row}`}>
                        <input placeholder='Например: ivangrozniy' className={`${css.input} col-auto ${css.robotoMedium}`}/> <button className={`${css.input_button} col-auto ${css.robotoMedium}`}>.work5.ru</button>
                    </div>
                    <div className={`row ${css.warning_row}`}>
                        <div className={`${css.warning_icon} col-auto`}><Warning /></div>
                        <div className={`col-auto ${css.robotoMedium} ${css.warning_text}`}>В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5. После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru). Подробнее по <a className={css.a} href='#'>ссылке</a></div>
                    </div>
                    <div className={`row ${css.buttons_rows}`}>
                        <button type="button" class={`${css.button_modal_cancel} btn btn-secondary `} onClick={handleClose}>Отмена</button>
                        <button type="button" class={`${css.button_modal} btn btn-success`} onClick={handleClose}>Создать</button>
                    </div>
                </div>
            </div>
      </>
    );
}

export default New_shop