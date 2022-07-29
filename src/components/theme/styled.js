export const background = props =>
  `background: ${props.theme.colors[props.bg] ?? ''};`;

export const color = props =>
  `color: ${props.theme.colors[props.color] ?? props.color};`;

export const fontSize = props =>
  `font-size: ${props.theme.fontSizes[props.fontSize] ?? ''};`;
