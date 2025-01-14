export type Operand =
	| {
			name: string
			value: number
			disabled: true
	  }
	| {
			name: string
			value: number
			setter: (arg: number) => void
	  }

export type WithWidth<T> = { width: number; name: string; valueGetter: (arg: T) => string }

export type EmphasisProps<T> = {
	headers: WithWidth<T>[]
	options: T[]
	binding: string | null
	footers?: WithWidth<T>[]
	roll?: () => void
}
