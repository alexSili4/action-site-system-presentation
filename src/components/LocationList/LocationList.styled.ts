import styled from '@emotion/styled';
import { IStyledProps } from './LocationList.types';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(147, 113, 241, 0.17);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9371f1;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  & > a {
    display: block;
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;

export const LinkPart = styled.span<IStyledProps>`
  color: ${({ isTitle }) => (isTitle ? '#3f3d5c' : '#7e8494')};
  font-family: Geologica;
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;
