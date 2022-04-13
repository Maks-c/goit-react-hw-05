import styled from "styled-components";
import {Link} from "react-router-dom";



export const LinkBtn=styled(Link)`

    display: inline-block; /* Строчно-блочный элемент */
    background: #B0C4DE; /* Серый цвет фона */
    color: #fff; /* Белый цвет текста */
    padding: 1rem 1.5rem; /* Поля вокруг текста */
    text-decoration: none; /* Убираем подчёркивание */
    border-radius: 3px;
`

export const Container=styled.article`

  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`
export const Feature=styled.div`
  margin-left: 15px;
  margin-right: 15px;
`


export const CardBlock=styled.div`
  display: flex;
`

export const H2=styled.h2`


    display: table;
    width: auto;
    margin: 15px auto;
    letter-spacing: 1px;
    color: #808080;





`

