import axios from 'axios';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { Box, font, Logo } from '~/components';
import { useAuth } from '~/components/modules';

import { Form } from './Form';

import { ReactComponent as Ilustra } from './ilustra.svg';

const Title = styled('h1')`
  ${font}
`;

const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flex={1} flexbox="column" center>
    <Box style={{ width: 445 }}>{children}</Box>
  </Box>
);

export const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const [, { login: setAuth }] = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };

  const onSubmit = async values => {
    console.log('aqui');
    try {
      const response = await axios.get('http://localhost:9901/login', {
        auth: values,
      });

      setAuth(response.data);
      history.replace(from);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <Box flexbox flex={1}>
      <CenteredBox bg="black">
        <Logo p={6} flexbox center />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Ilustra />
      </CenteredBox>
      <CenteredBox>
        <Title fontSize={7} textAlign="center">
          Login
        </Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  );
};
