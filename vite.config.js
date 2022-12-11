import { sveltekit } from '@sveltejs/kit/vite';
import smelte from 'smelte/rollup-plugin-smelte';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
