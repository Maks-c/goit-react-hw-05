import styled from "styled-components";
import {Link} from "react-router-dom";



export const LinkBtn=styled(Link)`

    display: inline-block; /* Строчно-блочный элемент */
    background: #8C959D; /* Серый цвет фона */
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
