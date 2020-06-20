import styled from "styled-components";

import {
  white,
  highlight,
  selected,
  itemAttributes,
} from "../../configuration/theme";

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: row;

  background: ${white};
  margin-bottom: ${itemAttributes.spacing}px;
  padding: ${itemAttributes.padding}px;
  color: ${highlight};

  min-width: 220px;

  div:last-child {
    margin-left: auto;
  }

  .simple-list-item-title-div:hover {
    color: ${selected};
    cursor: pointer;
  }
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  height: ${itemAttributes.innerHeight}px;
`;
