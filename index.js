export default function unimplemented () {
  const error = Object.assign(new Error('Not implemented'), { code: 'ERR_UNIMPLEMENTED' })
  if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(error, unimplemented)
  throw error
}
