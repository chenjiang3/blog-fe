export default {
  home: '/',
  articleDetail: '/article/:id',
  timeFile: '/time-file',
  says: '/say'
};

export const articleDetailPath = (id) => {
  return `/article/${id}`;
};