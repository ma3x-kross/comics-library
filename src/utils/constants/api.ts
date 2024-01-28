import md5 from 'md5'

export const BASE_URL = import.meta.env.VITE_BASE_URL



const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY
const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY

const TS = Date.now()

const HASH = md5(`${TS}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`)

export const API_PARAMS = `ts=${TS}&apikey=${PUBLIC_API_KEY}&hash=${HASH}`
