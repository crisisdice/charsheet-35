import { diff } from 'deep-object-diff';

import type { Character } from '$lib/types';

import { getSign } from './utilities';

function getPayload(newCharacter: Character, changes: Partial<Character>) {
  if ('spells' in changes && changes.spells != null) {
    const spells: Partial<Character['spells']> = {};
    const newSpells = Object.keys(changes.spells) as (keyof Character['spells'])[];

    for (const key of newSpells) {
      // @ts-expect-error TODO
      spells[key] = newCharacter.spells[key];
    }

    return { spells };
  }

  if ('gear' in changes && changes.gear != null) {
    if ('attacks' in changes.gear) {
      return { gear: { attacks: newCharacter.gear.attacks } };
    }

    if ('inventory' in changes.gear) {
      return { gear: { inventory: newCharacter.gear.inventory } };
    }
  }

  const arrKeys: (keyof Character)[] = ['feats', 'languages', 'specialAbilities'];

  const arrKey = arrKeys.find((k) => Object.keys(changes).includes(k));

  const payload = arrKey != null ? { [arrKey]: newCharacter[arrKey] } : changes;

  return payload;
}

export async function syncChanges(id: string, newCharacter: Character, oldCharacter: Character) {
  const changes = diff(oldCharacter, newCharacter) as Partial<Character>;

  if (Object.keys(changes).length === 0) {
    return;
  }

  console.log({ changes });

  console.log('updating...');

  const payload = getPayload(newCharacter, changes);

  await fetch(`/api/characters/${id}`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  console.log('updated');
}

function getRandomInt(max: number, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollDiceContent(
  prefix: string,
  checkName: string,
  diceSize: number,
  modifier: number
) {
  const roll = getRandomInt(diceSize);
  const sum = roll + modifier;

  return `${prefix} rolled **${sum}** for ${checkName} (**${roll}** base roll ${getSign(modifier)}**${Math.abs(modifier)}** modifier)`;
}

export async function rollDice(
  character: Character,
  checkName: string,
  diceSize: number,
  modifier: number
) {
  const content = `🎲 ${rollDiceContent(character.metadata.name, checkName, diceSize, modifier)} 🎲`;

  await rollDiceRequest(content);
}

export async function rollDiceRequest(content: string) {
  await fetch('/api/message', {
    method: 'POST',
    body: JSON.stringify({ content })
  });
}

export function copy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
