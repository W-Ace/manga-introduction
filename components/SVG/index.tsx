import { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import InlineSVG from 'react-inlinesvg';

const StyledInlineSVG = styled(InlineSVG)`
  display: block;
`;

const SVG: FC<ComponentProps<typeof InlineSVG>> = ({ src, ...props }) =>
  src ? <StyledInlineSVG cacheRequests src={src} {...props} /> : null;

export default SVG;