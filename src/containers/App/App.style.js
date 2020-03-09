import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 auto;
  padding-top: 1em;
  font-family: sans-serif;
  font-size: 1.25rem;

  p {
    margin: 0;
    text-align: center;
    :first-child {
      margin-top: 2em;
    }
  }

  .history {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5em;
  }

  .history-btn--prev {
    ::before {
      content: '\u2190';
      display: inline-block;
      margin-right: 5px;
    }
  }

  .history-btn--next {
    ::after {
      content: '\u2192';
      display: inline-block;
      margin-left: 5px;
    }
  }
`;

export default AppWrapper;
