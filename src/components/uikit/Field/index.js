import styled from 'styled-components';
import { th } from '~/components/theme/styled';
import { Box } from '../Box';
import { Input } from '../Input';
import { Label } from '../Label';

const ErrorMessage = styled(Box)`
  color: ${th.color('red')};
  padding: ${th.space(1)}px ${th.space(3)}px;
  font-size: ${th.size(2)}px;
`;

export const Field = ({ name, type, label, error, disabled, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
);
