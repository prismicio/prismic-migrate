import { defineConfig } from "vite"
import sdk from "vite-plugin-sdk"

export default defineConfig({
	plugins: [sdk()],
	resolve: {
		alias: {
			// Force using the Node-compatible version of `decode-named-character-reference`.
			"decode-named-character-reference":
				"./node_modules/decode-named-character-reference/index.js",
		},
	},
	test: {
		coverage: {
			provider: "v8",
			reporter: ["lcovonly", "text"],
		},
		setupFiles: ["./test/__setup__.ts"],
	},
})
