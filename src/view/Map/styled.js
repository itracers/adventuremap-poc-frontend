import styled from "styled-components";

export const Map = styled.div`
    position: absolute;
    top: 56px;
    width: 100%;
    height: calc(100vh - 56px);
    @media (min-width: 600px){
        top: 64px;
        height: calc(100vh - 64px);
    }
`