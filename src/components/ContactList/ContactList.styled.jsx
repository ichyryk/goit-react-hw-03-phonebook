import styled from '@emotion/styled/macro';

export const List = styled.ul`
  list-style: square;
  & li {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    & p:not(:last-child) {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
`;
