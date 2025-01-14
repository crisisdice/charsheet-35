import { writable } from 'svelte/store';
import { getContext } from 'svelte';

import type { Character } from '$lib/types';

export const getCharacter = () => getContext('character') as Character;

export const backup = writable<Character>();

let levelUpMode = $state<boolean>(false);

export function toggleLevelUpMode() {
  levelUpMode = !levelUpMode;
}

export function sheetIsLocked() {
  return !levelUpMode;
}
