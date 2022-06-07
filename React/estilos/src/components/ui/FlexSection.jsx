import styled from 'styled-components';

const FlexSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap + 'px'};
`;

export default FlexSection;