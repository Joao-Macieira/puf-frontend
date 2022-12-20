import axios from 'axios';
import { useState } from 'react';
import { Box, Field, Button } from '~/components';

export const Signup = () => {
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChange = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await axios.post('http://localhost:9901/users', values);
    } catch {
      //
    } finally {
      setValues({});
      setIsLoading(false);
    }
  };

  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field
            name="name"
            type="text"
            label="Nome"
            mb={3}
            disabled={isLoading}
            onChange={onChange}
          />
          <Field
            name="email"
            type="text"
            label="E-mail"
            mb={3}
            disabled={isLoading}
            onChange={onChange}
          />
          <Field
            name="password"
            type="password"
            label="Senha"
            mb={3}
            disabled={isLoading}
            onChange={onChange}
          />
          <Box flexbox center>
            <Button loading={isLoading}>Registrar</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
