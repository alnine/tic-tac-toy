import styled from 'styled-components';
import { Button } from '../../common/Button';

const CellButton = styled(Button)`
  width: 2em;
  height: 2em;
  margin-top: -1px;
  margin-right: -1px;
  font-size: 1em;
  font-weight: bold;
  line-height: 2em;
  text-align: center;
  border: 1px solid #000000;
`;

export default CellButton;
