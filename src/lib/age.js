import { writable } from 'svelte/store';

export const age = writable('');
export const year = writable(new Date().getFullYear());