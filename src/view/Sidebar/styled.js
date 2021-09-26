import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 360px;
    background: white;
    padding-left: 16px;
    padding-right: 16px;
    height: calc(100vh - 56px);
    z-index: 1;
    right: ${props=> (props.isOpen ? "0px" : "408px")};
    transition: 0.2s;
    @media (min-width: 600px){
        padding-left: 24px;
        padding-right: 24px;
        height: calc(100vh - 64px);
    }
`;