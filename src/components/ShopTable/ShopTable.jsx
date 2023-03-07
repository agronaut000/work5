import React from "react";
import { Table } from "react-bootstrap";
import Shop from "./Shop";
import css from './ShopTable.module.css'

const ShopTable = (props) => {

    const tables = [{number: 12345, name: "Дипломная работа", addres: "http://www.work5.ru/services"}, {number: 12345, name: "Дипломная работа", addres: "http://www.work5.ru/services"}]
    return <div className={css.container}>
        <Table  className={css.table}>
            <thead className={css.table_head}>
                <tr>
                    <th className={css.num}>№</th>
                    <th className={css.name}>Название</th>
                    <th className={css.addres}>Адрес</th>
                    <th className={css.action}>Действие</th>
                </tr>
            </thead>
            <tbody className={css.table_body}>
                {tables.map(el => <Shop num={el.number} name={el.name} addres={el.addres}/>)}
            </tbody>
        </Table>
    </div>

}

export default ShopTable;