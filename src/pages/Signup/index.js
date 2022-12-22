import styled from 'styled-components';

import { Box, font, Logo } from '~/components';
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

export const Signup = () => {
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
          Cadastro
        </Title>
        <Form />
      </CenteredBox>
    </Box>
  );
};
