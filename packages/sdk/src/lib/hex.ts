import crypto from 'crypto'

export const randomHex = (size = 12): string =>
  crypto.randomBytes(size).toString('hex')
