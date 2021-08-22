import styled from 'styled-components';


export const MovieImg = styled.div` 
    height: 500px;
    background-image: url(${props=>(props&&props.img)?props.img:''});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  
`
