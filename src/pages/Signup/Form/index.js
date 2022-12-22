/* eslint-disable no-use-before-define */
import axios from 'axios';
import { useFormik } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

import { Box, Field, Button, font } from '~/components';

const Link = styled('a')`
  text-decoration: none;
  ${font}
`;

const validationSchema = yup.object().shape({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe o seu e-mail'),
  password: yup.string().required('Digite uma senha'),
});

export const Form = () => {
  const onSubmit = async () => {
    try {
      await axios.post('http://localhost:9901/users', values);
    } catch (error) {
      console.error({ error });
    }
  };

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
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        label="Nome"
        value={values.name}
        mb={3}
        disabled={isSubmitting}
        error={touched.name && errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Field
        name="email"
        type="text"
        label="E-mail"
        value={values.email}
        mb={3}
        disabled={isSubmitting}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Field
        name="password"
        type="password"
        label="Senha"
        value={values.password}
        mb={3}
        disabled={isSubmitting}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Box flexbox="column" center>
        <Button loading={isSubmitting} mb={4}>
          Registrar
        </Button>
        <Link href="/#" fontSize={1} color="gray" fontWeight={700}>
          Já sou cadastrado
        </Link>
      </Box>
    </form>
  );
};
