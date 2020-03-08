import { createSelector } from "reselect";

const selectDiretory = state => state.directory;

export const selectDiretorySections = createSelector(
  [selectDiretory],
  directory => directory.sections
);
