import styled from 'styled-components';
import FlexSection from './ui/FlexSection';

import StyledButton from './ui/StyledButton';

const StyledDiv = styled.div`
    background-color: red;
    border: 1px solid black;
`;

const ComponentesEstilizados = () => {

    return <StyledDiv>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, libero!</p>
        <StyledButton texto="red" fondo="light">Pulsa!</StyledButton>
        <StyledButton texto="yellow" fondo="dark">Cancelar</StyledButton>
        <FlexSection gap="20" direction="row">
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
            <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_500%2Cc_limit/playa.jpg" />
        </FlexSection>
        <FlexSection gap="30" direction="column">
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti autem unde earum quasi! Perspiciatis ipsa consequatur, voluptate, voluptates, nesciunt modi suscipit vel iste optio quo deleniti eaque maxime. Illo!</p>
        </FlexSection>
        <img src="./images/0.jpg" alt="" />
    </StyledDiv>
}

export default ComponentesEstilizados;