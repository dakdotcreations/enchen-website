import type Lenis from 'lenis';

let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis): void {
	instance = l;
}

export function getLenisInstance(): Lenis | null {
	return instance;
}
