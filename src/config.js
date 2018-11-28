export const API = 'api';

export const tagColors = [
  '#FF6B72',
  '#FF39E5',
  '#AD7AFF',
  '#FF90B1',
  '#61DAFF',
  '#2363D0',
  '#63894F',
];

export function getColor() {
  const index = Math.floor(Math.random() * tagColors.length);
  return tagColors[index];
}