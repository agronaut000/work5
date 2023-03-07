import React from 'react';
import New_shop from '../components/New_shop/New_shop';
import ShopTable from '../components/ShopTable/ShopTable';
import css from './My_shop.module.css'

const My_shops = (props) => {
    return <div className={`${css.main} container`}> 
        <div className='row'>
            <New_shop />
        </div>
        <div className='row'>
            <div className={`${css.h1}`}>Управление магазинами</div>
        </div>

        <div className='row'>
            <ShopTable />
        </div>
    </div>
} 

export default My_shops