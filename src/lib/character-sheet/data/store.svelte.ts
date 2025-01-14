import { writable } from 'svelte/store'

import type { Character, FixedLengthArray, InventoryItem } from '../../types.ts'

// https://json-schema-faker.js.org/#gist/4199ca90fb5cd05337824b0695d17b5e
const dummy: Character = {
	campaign: 'SPDND',
	xp: 333,
	abilities: {
		charisma: 10,
		constitution: 9,
		dexterity: 12,
		intelligence: 13,
		strength: 14,
		wisdom: 15
	},
	metadata: {
		age: 70,
		alignment: 'CN',
		class: 'Ranger',
		deity: 'Gobbo',
		eyes: 'Blue',
		gender: 'M',
		hair: 'Black',
		height: '6ft',
		level: 1,
		name: 'Boros',
		player: 'Alexander',
		race: 'Elf',
		size: 'M',
		weight: '120lbs',
		skin: 'Beige'
	},
	saves: {
		fortitude: {
			magic: 0,
			misc: 0,
			temporary: 0
		},
		reflex: {
			magic: 0,
			misc: 0,
			temporary: 0
		},
		will: {
			magic: 0,
			misc: 0,
			temporary: 0
		}
	},
	stats: {
		hp: 10,
		currentHp: 10,
		nonleathalDamage: 0,
		initiative: 0,
		speed: 30,
		deflectAc: 0,
		miscAc: 0,
		naturalAc: 0,
		spellResistance: 0,
		damageReduction: 0
	},
	gear: {
		attacks: [null, null, null, null, null],
		armor: null,
		shield: null,
		protectiveItemOne: null,
		protectiveItemTwo: null,
		inventory: [...Array(33).keys()].map(() => ({
			name: '',
			page: '',
			weight: null
		})) as FixedLengthArray<33, InventoryItem>,
		money: {
			copper: 3,
			silver: 6,
			gold: 9,
			platinum: 0
		}
	},
	skills: {
		appraise: { ranks: 0, miscModifier: 0 },
		balance: { ranks: 0, miscModifier: 0 },
		bluff: { ranks: 0, miscModifier: 0 },
		climb: { ranks: 0, miscModifier: 0 },
		concentration: { ranks: 0, miscModifier: 0 },
		craft: { ranks: 0, miscModifier: 0 },
		decipherScript: { ranks: 0, miscModifier: 0 },
		diplomacy: { ranks: 0, miscModifier: 0 },
		disableDevice: { ranks: 0, miscModifier: 0 },
		disguise: { ranks: 0, miscModifier: 0 },
		escapeArtist: { ranks: 0, miscModifier: 0 },
		forgery: { ranks: 0, miscModifier: 0 },
		gatherInformation: { ranks: 0, miscModifier: 0 },
		handleAnimal: { ranks: 0, miscModifier: 0 },
		heal: { ranks: 0, miscModifier: 0 },
		hide: { ranks: 0, miscModifier: 0 },
		intimidate: { ranks: 0, miscModifier: 0 },
		jump: { ranks: 0, miscModifier: 0 },
		knowledge: { ranks: 0, miscModifier: 0 },
		listen: { ranks: 0, miscModifier: 0 },
		moveSilently: { ranks: 0, miscModifier: 0 },
		openLock: { ranks: 0, miscModifier: 0 },
		perform: { ranks: 0, miscModifier: 0 },
		profession: { ranks: 0, miscModifier: 0 },
		ride: { ranks: 0, miscModifier: 0 },
		search: { ranks: 0, miscModifier: 0 },
		senseMotive: { ranks: 0, miscModifier: 0 },
		sleightOfHand: { ranks: 0, miscModifier: 0 },
		spellcraft: { ranks: 0, miscModifier: 0 },
		spot: { ranks: 0, miscModifier: 0 },
		survival: { ranks: 0, miscModifier: 0 },
		swim: { ranks: 0, miscModifier: 0 },
		tumble: { ranks: 0, miscModifier: 0 },
		useMagicDevice: { ranks: 0, miscModifier: 0 },
		usePsionicDevice: { ranks: 0, miscModifier: 0 },
		useRope: { ranks: 0, miscModifier: 0 }
	},
	feats: [...Array(12).keys()].map(() => '') as FixedLengthArray<12, string>,
	specialAbilities: [...Array(23).keys()].map(() => '') as FixedLengthArray<23, string>,
	languages: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
	spells: {
		zeroth: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		first: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		second: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		third: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		fourth: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		fifth: [...Array(6).keys()].map(() => '') as FixedLengthArray<6, string>,
		sixth: [...Array(3).keys()].map(() => '') as FixedLengthArray<3, string>,
		seventh: [...Array(3).keys()].map(() => '') as FixedLengthArray<3, string>,
		eighth: [...Array(3).keys()].map(() => '') as FixedLengthArray<3, string>,
		ninth: [...Array(3).keys()].map(() => '') as FixedLengthArray<3, string>
	}
}

console.log(JSON.stringify(dummy))

export const character = $state<Character>(dummy)

export const backup = writable<Character>(dummy)

let levelUpMode = $state<boolean>(false)

export function toggleLevelUpMode() {
	levelUpMode = !levelUpMode
}

export function sheetIsLocked() {
	return !levelUpMode
}
