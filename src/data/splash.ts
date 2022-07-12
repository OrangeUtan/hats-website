import { writable } from 'svelte/store';

const splash_texts = [
  "Gotta Get 'Em All",
  'Take your 🐕‍🦺 for a walk',
  'Take your 🐈 for a walk',
  'Pantastic armor 🍳',
  '5/7 Opticians approve 🕶️',
  'Arrowdynamic advantage 🏹',
  'One size fits all 👕',
  'One size fits all 👗',
  'One size fits all 👘'
].sort(() => 0.5 - Math.random());
let current_splash_idx = 0;

export const splash_text = writable(splash_texts[current_splash_idx]);

export function next_splash() {
  current_splash_idx = (current_splash_idx + 1) % splash_texts.length;
  splash_text.set(splash_texts[current_splash_idx]);
}
