import React from 'react';
import styled from 'styled-components';

import { Icon } from '../';
import { ChevronDownIcon } from '../../icons';

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .Icon {
    right: ${({ theme }) => theme?.Select?.padding};
    position: absolute;
    pointer-events: none;
  }
`;

const SelectContainer = styled.select`
  -webkit-appearance: none;

  box-sizing: border-box;
  appearance: none;
  margin: 0;
  width: 100%;
  outline: none;
  cursor: pointer;  
  max-height: ${({ theme }) => theme?.Select?.inputHeight};
  height: ${({ theme }) => theme?.Select?.inputHeight};
  color: var(--input-text-color);
  background: var(--input-background-color);
  border: 1px solid var(--border-color);
  border-radius: ${({ theme }) => theme?.Select?.borderRadius};
  padding: ${({ theme }) => theme?.Select?.inputPadding};
  
}`;

export const Select = ({ savedData, onChange, children }) => {
  const onChangeHandler = event => {
    onChange(event);
  };

  return (
    <SelectWrapper>
      <SelectContainer value={savedData} onChange={onChangeHandler}>
        {children
          ? children.map(each => {
              return each;
            })
          : null}
      </SelectContainer>
      <Icon className="Icon" iconSize="30px">
        <ChevronDownIcon />
      </Icon>
    </SelectWrapper>
  );
};
