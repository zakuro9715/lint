/* rule
 * module.exports = {
 *   valid: [
 *     ` function f() {  // 1 spaces
 *         code  // 6 spaces + 1 indent
 *       }
 *     ` // 4 spaces
 *   ],
 *   invalid: [{
 *     code:
 *       ` function f() {  // 1 spaces
 *           code  // 8 spaces + 1 indent
 *         }
 *        ` // 4 spaces
 *     errors: []
 *   }]
 * }
 */

const deindent = (s, n) => s
  .replace(/^ /, '')
  .replace(new RegExp(` {${n}}`, 'g'), '')
  .replace(/ {4}$/g, '')

module.exports.wrapTest = (rule) => ({
  valid: rule.valid.map((s) => deindent(s, 6)),
  invalid: rule.invalid.map((v) => ({ ...v, code: deindent(v.code, 8) })),
})
