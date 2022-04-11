import styled from "styled-components";


export const Container=styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;

`


export const ListFoundStyle=styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin:0  auto 0 auto;
  padding: 0;
  list-style: none;
`


export const ImageFoundItem=styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);


  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover{
    Transform: scale(1.03);
    cursor: zoom-in;
  }


`
export const ImageFound=styled.img`
  width: 100%;
  object-fit: cover;


`
