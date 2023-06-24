import styled from 'styled-components';

export const DivFeedbackCounter = styled.div`
  width: 300px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgrey;

  & button {
    display: inline-block;
    margin-left: 5px;
    padding: 5px 20px;
    text-transform: capitalize;
    outline: none;
    border: none;
    border-radius: 30px;

    cursor: pointer;
  }
  & h2 {
    text-align: center;
  }
  & ul {
    list-style: none;
    text-transform: capitalize;
    li {
      margin-bottom: 5px;
    }
  }

  & li:last-child {
    text-transform: none;
  }
`;

export default DivFeedbackCounter;
