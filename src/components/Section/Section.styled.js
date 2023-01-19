import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #dddddd;
  width: ${p=>p.theme.widths.totalWidth}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  margin: 0;
  padding: ${p => p.theme.mp(2, 3)};
  text-align: center;
`;
