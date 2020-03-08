import styled from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(${props => props.size} * 2em);
  font-size: 1em;
`;

export default StyledBoard;
