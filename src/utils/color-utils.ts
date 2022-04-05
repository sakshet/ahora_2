import { COLOR } from '../shared';

export function setColors(content: string): void {
  document.documentElement.style.setProperty('--labelColor', COLOR[content].labelColor);
  document.documentElement.style.setProperty('--consumerBg', COLOR[content].consumerBg);
  document.documentElement.style.setProperty('--producerBg', COLOR[content].producerBg);
  document.documentElement.style.setProperty('--tabColor', COLOR[content].tabColor);
}