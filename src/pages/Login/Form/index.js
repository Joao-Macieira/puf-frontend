import { useFormik } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

import { Box, Field, Button, font } from '~/components';

const Link = styled('a')`
  text-decoration: none;
  ${font}
`;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email('E-mail inválido')
    .required('Informe o seu e-mail'),
  password: yup.string().required('Digite uma senha'),
});

export const Form = ({ onSubmit }) => {
  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        value={values.username}
        mb={3}
        disabled={isSubmitting}
        error={touched.username && errors.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Field
        name="password"
        type="password"
        label="Senha"
        placeholder="Digite a sua senha"
        value={values.password}
        mb={3}
        disabled={isSubmitting}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Box flexbox="column" center>
        <Button loading={isSubmitting} mb={4} type="submit">
          Entrar
        </Button>
        <Box fontSize={1} color="gray">
          Não possui cadastro?{' '}
          <Link href="/cadastro" color="gray" fontWeight={700}>
            Cadastre-se!
          </Link>
        </Box>
      </Box>
    </form>
  );
};
