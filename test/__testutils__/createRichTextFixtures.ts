import type { RichTextField } from "@prismicio/client"

import enRichTextJSON from "../__fixtures__/enRichText.json"

const deepCloneJSON = <T>(json: T): T => {
	return JSON.parse(JSON.stringify(json))
}

export const createRichTextFixtures = (): Record<"en", RichTextField> => {
	return {
		en: deepCloneJSON(enRichTextJSON) as RichTextField,
	}
}
