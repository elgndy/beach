import styled from 'styled-components';

import def_bac from '../imgs/room15.png';

const StyledHero = styled.header `
    width: 100%;
    background-image: url(${(props) => props.img || def_bac});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    min-height: 70vh;
`;

export default StyledHero
