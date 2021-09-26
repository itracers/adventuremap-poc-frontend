import styled from "styled-components";

export const Map = styled.div`
    position: relative;
    display: inline-block;
    top: 0;
    width: 100%;
    height: calc(100vh - 56px);щ
    @media (min-width: 600px){
        top: 64px;
        height: calc(100vh - 64px);
    }
`