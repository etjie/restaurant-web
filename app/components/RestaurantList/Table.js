import styled from 'styled-components';

const Table = styled.table`
  margin: 15px 0;
  width: 100%;

  td {
    &.center {
      text-align: center;
    }
    padding: 10px 15px;
    border: 2px solid #d9d9d9;
  }
  thead {
    tr {
      font-weight: 600;
    }
    td {
      background-color: #efefef;
      div {
        margin: 0;
      }
    }
  }
  .hidden {
    display: none;
  }
`;

export default Table;
