import { describe, expect, it } from "vitest"
import { csvEscape, toCsvRow } from "../src/csv"

describe("csvEscape", () => {
  it("leaves plain values unquoted", () => {
    expect(csvEscape("Bob")).toBe("Bob")
    expect(csvEscape(42)).toBe("42")
  })

  it("quotes values containing a comma", () => {
    expect(csvEscape("Q1, New Epic")).toBe('"Q1, New Epic"')
  })

  it("quotes values containing a newline", () => {
    expect(csvEscape("line1\nline2")).toBe('"line1\nline2"')
  })

  it("escapes embedded quotes by doubling them", () => {
    expect(csvEscape('Say "hi"')).toBe('"Say ""hi"""')
  })
})

describe("toCsvRow", () => {
  it("joins escaped fields with a comma", () => {
    expect(toCsvRow(["epic-1", "Q1, New Epic", 5])).toBe(
      'epic-1,"Q1, New Epic",5'
    )
  })
})
