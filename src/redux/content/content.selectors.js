import { createSelector } from 'reselect';

const selectContent = state => state.content;

export const selectContentList = createSelector(
  [selectContent],
  content => content.list
);
