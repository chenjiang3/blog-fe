export default {
  home: '/',
  articleDetail: '/article/:id',
  timeFile: '/time-file',
};

export const articleDetailPath = (id) => {
  return `/article/${id}`;
};