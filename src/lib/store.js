import { writable } from 'svelte/store'

const createToggle = () => {
	const { subscribe, update } = writable(false)

	return {
		subscribe,
		toggle: () => update((val) => !val)
	}
}

export const toggle = createToggle()

export const page = writable(1)

export const rows = writable(10)
