import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => (props.fondo === 'light') ? 'lightblue' : 'dodgerblue'};
    color: ${props => props.texto};
    font-size: 20px;
`;

export default StyledButton;