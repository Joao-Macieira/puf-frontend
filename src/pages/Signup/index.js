import { Box, Field } from '~/components';

export const Signup = () => {
  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Field name="name" type="text" label="Nome" mb={3} />
        <Field name="email" type="text" label="E-mail" mb={3} />
        <Field name="password" type="password" label="Senha" />
      </Box>
    </Box>
  );
};
