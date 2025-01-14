import type { Operand } from '../types'
import type { SkillEntry } from '../skills'
import type { Abilities, Character, Saves, Attack } from '../../types'

import { getSign, toAbilityScoreNumerical } from '../utilities'
import { SIZE_BONUSES } from '../system/size'
import { CLASS_STATS } from '../system/classes'
import { ARMOR, ENCUMBERANCE, WEAPONS } from '../system/gear'

const dexterityScore = (character: Character) => {
	return toAbilityScoreNumerical(character.abilities.dexterity)
}

const strengthScore = (character: Character) => {
	return toAbilityScoreNumerical(character.abilities.strength)
}

export const skillModifier = ({ key, ability }: SkillEntry, character: Character) => {
	const abilityScore = toAbilityScoreNumerical(character.abilities[ability])
	const { ranks, miscModifier } = character.skills[key]

	return { value: abilityScore + ranks + miscModifier, abilityScore }
}

export const attackBonus =
	(character: Character) =>
	({ key, range }: Attack) => {
		const bonus = baseAttackBonus(character)

		if (key === 'dagger-m' || range === null) {
			const strength = strengthScore(character)
			return bonus + strength
		}

		const dexterity = dexterityScore(character)
		return bonus + dexterity
	}

export const damageBonus =
	(character: Character) =>
	({ key, range }: Attack) => {
		if (key === 'dagger-m' || range === null) {
			const strength = strengthScore(character)
			return strength
		}

		return 0
	}

export const attackBonusString = (character: Character) => (attack: Attack) => {
	const score = attackBonus(character)(attack)
	const sign = getSign(score)
	return `${sign}${Math.abs(score)}`
}

export const armorClasses = (character: Character) => {
	const armorValue = ARMOR.find(({ key }) => key === character.gear.armor)?.bonus ?? 0

	const operands: Operand[] = [
		{
			name: 'Armor Bonus',
			value: armorValue,
			disabled: true
		},
		{
			name: 'Shield Bonus',
			value: 0, // TODO shields
			disabled: true
		},
		{
			name: 'Dex Modifier',
			value: dexterityScore(character),
			disabled: true
		},
		{
			name: 'Size Modifier',
			value: SIZE_BONUSES[character.metadata.size].ac,
			disabled: true
		},
		{
			name: 'Natural Armor',
			value: character.stats.naturalAc,
			setter: (arg) => {
				character.stats.naturalAc = arg
			}
		},
		{
			name: 'Deflection Modifier',
			value: character.stats.deflectAc,
			setter: (arg) => {
				character.stats.deflectAc = arg
			}
		},
		{
			name: 'Misc Modifier',
			value: character.stats.miscAc,
			setter: (arg) => {
				character.stats.miscAc = arg
			}
		}
	]

	const armorClass = operands.reduce((sum, { value }) => sum + value, 0) + 10
	const touchArmorClass =
		10 + operands.at(-1)!.value + operands.at(-2)!.value + dexterityScore(character)
	const flatFootedArmorClass = armorClass - dexterityScore(character)

	return { operands, armorClass, touchArmorClass, flatFootedArmorClass }
}

export const initiativeOperands = (character: Character) => {
	const operands: Operand[] = [
		{
			name: 'Dex Modifier',
			value: dexterityScore(character),
			disabled: true
		},
		{
			name: 'Misc Modifier',
			value: character.stats.initiative,
			setter: (arg: number) => {
				character.stats.initiative = arg
			}
		}
	]

	return { operands }
}

export const initiativeSum = (operands: Operand[]) => {
	return operands.reduce((sum, { value }) => sum + value, 0)
}

export const baseAttackBonus = (character: Character) =>
	CLASS_STATS[character.metadata.class].baseAttackBonus[character.metadata.level - 1]

export const grappleOperands = (character: Character) => {
	const operands: Operand[] = [
		{
			name: 'Base Attack Bonus',
			value: baseAttackBonus(character),
			disabled: true
		},
		{
			name: 'Strength Modifier',
			value: toAbilityScoreNumerical(character.abilities.strength),
			disabled: true
		},
		{
			name: 'Size Modifier',
			value: SIZE_BONUSES[character.metadata.size].grapple,
			disabled: true
		},
		{
			name: 'Misc Modifier',
			value: character.stats.initiative,
			setter: (arg: number) => {
				character.stats.initiative = arg
			}
		}
	]

	return { operands }
}

export const grappleSum = (operands: Operand[]) => {
	return operands.reduce((sum, { value }) => sum + value, 0)
}

export const savingThrow = (
	save: keyof Saves,
	ability: keyof Abilities,
	headers: [string, string, string, string],
	character: Character
) => {
	const operands: Operand[] = [
		{
			name: headers[0],
			value: CLASS_STATS[character.metadata.class].saves[save][character.metadata.level - 1],
			disabled: true
		},
		{
			name: headers[1],
			value: toAbilityScoreNumerical(character.abilities[ability]),
			disabled: true
		},
		{
			name: headers[2],
			value: character.saves[save].magic,
			setter: (arg) => {
				character.saves[save].magic = arg
			}
		},
		{
			name: headers[3],
			value: character.saves[save].misc,
			setter: (arg) => {
				character.saves[save].misc = arg
			}
		}
	]

	const temporaryModifier = character.saves[save].temporary
	const value = operands.reduce((sum, { value }) => sum + value, 0) + temporaryModifier

	return { operands, value }
}

export const totalWeight = (character: Character) => {
	// TODO look up weights by keys
	//
	const weapons = character.gear.attacks.reduce((sum, attack) => {
		const weight = WEAPONS.find(({ key }) => key === attack)?.weight

		return (weight ?? 0) + sum
	}, 0)
	const armor = ARMOR.find(({ key }) => key === character.gear.armor)?.weight ?? 0
	const shield = 0
	const protectiveItemOne = 0
	const protectiveItemTwo = 0

	const items = character.gear.inventory.reduce((sum, item) => {
		if (typeof item.weight === 'number') {
			return item.weight + sum
		}

		return sum
	}, 0)

	return weapons + armor + shield + protectiveItemOne + protectiveItemTwo + items
}

export const encumberance = (character: Character) => {
	const [light, medium, heavy] = ENCUMBERANCE[character.abilities.strength]

	const liftOverHead = heavy
	const liftOffGround = heavy * 2
	const pushOrDrag = heavy * 5

	const headers = [
		{ key: 'LIGHT LOAD', value: light },
		{ key: 'MEDIUM LOAD', value: medium },
		{ key: 'HEAVY LOAD', value: heavy },
		{ key: 'LIFT OVER HEAD', value: liftOverHead },
		{ key: 'LIFT OFF GROUND', value: liftOffGround },
		{ key: 'PUSH OR DRAG', value: pushOrDrag }
	]

	return headers
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const spellStatistics = (_character: Character) => {
	return { spellSave: 0, arcaneSpellFailure: 0 } // TODO calculate
}
