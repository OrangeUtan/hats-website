import { writable } from 'svelte/store';

const splash_texts = [
  "Gotta Get 'Em All",
  'Take your pet for a walk',
  'Pantastic headwear',
  '5/7 Opticians approve'
].sort(() => 0.5 - Math.random());

export const splash_text = writable(splash_texts[0]);
