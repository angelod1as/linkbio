import styled from 'styled-components';

const noScroll = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const EditPanel = styled(noScroll)`
  overflow-y: scroll;
  height: 100vh;
  padding: 0;
  margin: 0;
  padding: 50px 20px;
`;

export const PreviewPanel = styled(noScroll)`
  overflow-y: scroll;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #1f3b73;
  border-left: 5px solid #f2cb05;
  padding: 50px 20px;
`;
