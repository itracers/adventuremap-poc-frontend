import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    background: orange;
    @media (min-width: 600px){
        height: calc(100vh - 64px);
    }
`;