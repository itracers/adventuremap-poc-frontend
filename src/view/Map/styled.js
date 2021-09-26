import styled from "styled-components";

export const Map = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    top: 56px;
    height: calc(100vh - 56px);
    @media (min-width: 600px){
        top: 64px;
        height: calc(100vh - 64px);
    }
`