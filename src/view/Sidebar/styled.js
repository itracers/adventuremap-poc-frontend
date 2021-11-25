import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 360px;
    background: white;
    padding-left: 16px;
    padding-right: 16px;
    height: calc(100vh - 56px);
    overflow-y: scroll;
    z-index: 1;
    left: ${props=> (props.isOpen ? "0px" : "-408px")};
    display: inline-block;
    transition: 0.2s;
    @media (min-width: 600px){
        padding-left: 24px;
        padding-right: 24px;
        height: calc(100vh - 64px);
    }
`;