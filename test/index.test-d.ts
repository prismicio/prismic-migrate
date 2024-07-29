import { expectTypeOf, it } from "vitest"

import * as lib from "../src"

it("is a function", () => {
	expectTypeOf(lib.htmlAsRichText).toBeFunction()
})
