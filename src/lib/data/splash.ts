import { writable } from 'svelte/store';

const splash_texts = [
  "Gotta Get 'Em All",
  'Take your 🐕‍🦺 for a walk',
  'Take your 🐈 for a walk',
  'Pantastic headgear 🍳',
  '5/7 Opticians approve 🕶️'
].sort(() => 0.5 - Math.random());
let current_splash_idx = 0;

export const splash_text = writable(splash_texts[current_splash_idx]);

export function next_splash() {
  splash_text.set(splash_texts[current_splash_idx++ % splash_texts.length]);
}
