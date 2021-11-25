import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 56px;
    height: calc(100vh - 56px);
    @media (min-width: 600px){
        top: 64px;
        height: calc(100vh - 64px);
    }
`;