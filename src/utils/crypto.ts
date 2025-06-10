import { createCipheriv } from 'node:crypto'

export function aesEncrypt(text: string): string {
  const decipher = createCipheriv('aes-128-cbc', '1111111111111111', '1111111111111111')
  decipher.setAutoPadding(true)
  return decipher.update(text, 'utf-8', 'base64') + decipher.final('base64')
}
