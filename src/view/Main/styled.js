import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 408px 1fr;
    grid-template-columns:: ${props=> (props.isOpen ? "408px 1fr" : "0px 1fr")};
    height: calc(100vh - 56px);
    background: orange;
    @media (min-width: 600px){
        height: calc(100vh - 64px);
    }
`;