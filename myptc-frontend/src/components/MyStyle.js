import styled from 'styled-components';
const ImgList = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      float: left;
      p {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
const width = '1024px';
const PaddingBox = styled.div`
  padding: 0 30px;
  width: ${width};
  margin: 0 auto;
`;

const Ul = styled.ul`
  list-style: none;
  li {
    position: relative;
    margin-bottom: 20px;
    div {
      position: absolute;
      bottom: -20px;
      width: 100%;
      text-align: center;
    }
  }
`;
export { ImgList, PaddingBox, Ul };
