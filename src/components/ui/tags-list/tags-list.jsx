import React from 'react';
import { StyledTags } from './styled';
import Tag from '../../ui/tag/tag';

const TagList = ({ tags }) => {
  return (
    <StyledTags>
      {tags &&
        tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
    </StyledTags>
  );
};

export default TagList;
