import styled from 'styled-components';

import { th } from '~/components/theme/styled';

export const Input = styled('input')`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  color: ${th.color('white')};
  padding: ${th.space(2)}px ${th.space(1)}px;
  font-size: inherit;
  outline: none;
`;
