/** Escapes a single CSV field per RFC 4180: wraps in quotes and doubles any
 * embedded quotes whenever the value contains a comma, quote, or newline. */
export function csvEscape(value: string | number | Date): string {
  const str = String(value)

  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`
  }

  return str
}

export function toCsvRow(fields: (string | number | Date)[]): string {
  return fields.map(csvEscape).join(",")
}
