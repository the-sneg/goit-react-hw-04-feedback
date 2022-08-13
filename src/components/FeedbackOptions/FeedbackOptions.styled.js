import styled from 'styled-components';

export const ButtonHover = styled.button`
  border-radius: 15px;
  border: 1px solid #49e1be;
  width: 70px;
  height: 30px;
  transition: transform 250ms;
  text-align: center;
  &:hover {
    transform: scale(1.3);
    background-color: ${state => {
      switch (state.name) {
        case 'good':
          return '#6df16d';
        case 'neutral':
          return '#f1ea02';
        case 'bad':
          return '#ff4141';
        default:
          return 'black';
      }
    }};
  }
`;
