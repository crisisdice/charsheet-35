import type { AbilityName, Skills } from '../types.ts'

export type SkillEntry = {
	key: keyof Skills
	name: string
	ability: AbilityName
	untrained: boolean
	armorCheckPenalty: boolean
}

export const skills: SkillEntry[] = [
	{
		key: 'appraise',
		name: 'Appraise',
		ability: 'intelligence',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'balance',
		name: 'Balance',
		ability: 'dexterity',
		untrained: true,
		armorCheckPenalty: true
	},
	{ key: 'bluff', name: 'Bluff', ability: 'charisma', untrained: true, armorCheckPenalty: false },
	{ key: 'climb', name: 'Climb', ability: 'strength', untrained: true, armorCheckPenalty: true },
	{
		key: 'concentration',
		name: 'Concentration',
		ability: 'constitution',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'craft',
		name: 'Craft',
		ability: 'intelligence',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'decipherScript',
		name: 'Decipher Script',
		ability: 'intelligence',
		untrained: false,
		armorCheckPenalty: false
	},
	{
		key: 'diplomacy',
		name: 'Diplomacy',
		ability: 'charisma',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'disableDevice',
		name: 'Disable Device',
		ability: 'intelligence',
		untrained: false,
		armorCheckPenalty: false
	},
	{
		key: 'disguise',
		name: 'Disguise',
		ability: 'charisma',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'escapeArtist',
		name: 'Escape Artist',
		ability: 'dexterity',
		untrained: true,
		armorCheckPenalty: true
	},
	{
		key: 'forgery',
		name: 'Forgery',
		ability: 'intelligence',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'gatherInformation',
		name: 'Gather Information',
		ability: 'charisma',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'handleAnimal',
		name: 'Handle Animal',
		ability: 'charisma',
		untrained: false,
		armorCheckPenalty: false
	},
	{ key: 'heal', name: 'Heal', ability: 'wisdom', untrained: true, armorCheckPenalty: false },
	{ key: 'hide', name: 'Hide', ability: 'dexterity', untrained: true, armorCheckPenalty: true },
	{
		key: 'intimidate',
		name: 'Intimidate',
		ability: 'charisma',
		untrained: true,
		armorCheckPenalty: false
	},
	{ key: 'jump', name: 'Jump', ability: 'strength', untrained: true, armorCheckPenalty: true },
	{
		key: 'knowledge',
		name: 'Knowledge',
		ability: 'intelligence',
		untrained: false,
		armorCheckPenalty: false
	},
	{ key: 'listen', name: 'Listen', ability: 'wisdom', untrained: true, armorCheckPenalty: false },
	{
		key: 'moveSilently',
		name: 'Move Silently',
		ability: 'dexterity',
		untrained: true,
		armorCheckPenalty: true
	},
	{
		key: 'openLock',
		name: 'Open Lock',
		ability: 'dexterity',
		untrained: false,
		armorCheckPenalty: false
	},
	{
		key: 'perform',
		name: 'Perform',
		ability: 'charisma',
		untrained: false,
		armorCheckPenalty: false
	},
	{
		key: 'profession',
		name: 'Profession',
		ability: 'wisdom',
		untrained: false,
		armorCheckPenalty: false
	},
	{ key: 'ride', name: 'Ride', ability: 'dexterity', untrained: true, armorCheckPenalty: false },
	{
		key: 'search',
		name: 'Search',
		ability: 'intelligence',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'senseMotive',
		name: 'Sense Motive',
		ability: 'wisdom',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'sleightOfHand',
		name: 'Sleight of Hand',
		ability: 'dexterity',
		untrained: false,
		armorCheckPenalty: true
	},
	{
		key: 'spellcraft',
		name: 'Spellcraft',
		ability: 'intelligence',
		untrained: false,
		armorCheckPenalty: false
	},
	{ key: 'spot', name: 'Spot', ability: 'wisdom', untrained: true, armorCheckPenalty: false },
	{
		key: 'survival',
		name: 'Survival',
		ability: 'wisdom',
		untrained: true,
		armorCheckPenalty: false
	},
	{ key: 'swim', name: 'Swim', ability: 'strength', untrained: true, armorCheckPenalty: true },
	{
		key: 'tumble',
		name: 'Tumble',
		ability: 'dexterity',
		untrained: false,
		armorCheckPenalty: true
	},
	{
		key: 'useMagicDevice',
		name: 'Use Magic Device',
		ability: 'charisma',
		untrained: false,
		armorCheckPenalty: false
	},
	{
		key: 'usePsionicDevice',
		name: 'Use Psionic Device',
		ability: 'charisma',
		untrained: true,
		armorCheckPenalty: false
	},
	{
		key: 'useRope',
		name: 'Use Rope',
		ability: 'dexterity',
		untrained: true,
		armorCheckPenalty: false
	}
]
