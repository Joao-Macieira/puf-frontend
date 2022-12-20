/* eslint-disable no-use-before-define */
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { Box, Field, Button } from '~/components';

const validationSchema = yup.object().shape({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe o seu e-mail'),
  password: yup.string().required('Digite uma senha'),
});

export const Signup = () => {
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
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
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
          <Box flexbox center>
            <Button loading={isSubmitting}>Registrar</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
