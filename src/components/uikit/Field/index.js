import { Box } from '../Box';
import { Input } from '../Input';
import { Label } from '../Label';

export const Field = ({ name, type, label, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} />
  </Box>
);
