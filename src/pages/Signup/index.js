import { Box, Field, Button } from '~/components';

export const Signup = () => {
  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Field name="name" type="text" label="Nome" mb={3} />
        <Field name="email" type="text" label="E-mail" mb={3} />
        <Field name="password" type="password" label="Senha" mb={3} />
        <Box flexbox center>
          <Button>Registrar</Button>
        </Box>
      </Box>
    </Box>
  );
};
