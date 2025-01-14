export function getSign(n: number, showPlus = true) {
	const plus = showPlus ? '+ ' : ''

	return n >= 0 ? plus : '- '
}

export function toAbilityScore(score: number, showPlus = true) {
	const mod = toAbilityScoreNumerical(score)

	return `${getSign(mod, showPlus)}${Math.abs(mod)}`
}

export function toAbilityScoreNumerical(score: number) {
	const closestEvenNumber = score % 2 === 0 ? score : score - 1
	const mod = (closestEvenNumber - 10) / 2

	return mod
}

export function ordinalIndicator(n: number) {
	switch (n) {
		case 0:
			return '0'
		case 1:
			return '1st'
		case 2:
			return '2nd'
		case 3:
			return '3rd'
		default:
			return `${n}th`
	}
}
