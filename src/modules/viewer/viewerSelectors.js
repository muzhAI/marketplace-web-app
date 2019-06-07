import { createSelector } from 'reselect';

const getUserEntities = (state) => state.entities.users;
const getViewerId = (state) => state.viewer.user;
export const getViewer = createSelector(
  [getUserEntities, getViewerId],
  (users, viewerId) => users[viewerId],
);
