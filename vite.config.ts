import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import { presetWind4, presetWebFonts, presetIcons, transformerVariantGroup } from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [
				presetWind4({ preflights: { reset: true } }),
				presetWebFonts({
					fonts: {
						sans: 'Montserrat',
						serif: 'Rufina'
					}
				}),
				presetIcons()
			],
			transformers: [transformerVariantGroup()]
		})
	]
});
