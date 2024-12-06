import {config} from 'dotenv'
import env from 'env-var'

config()

export const PORT = env.get('PORT').required().asPortNumber()

export const PUBLIC_PATH = env.get('PUBLIC_PATH').default('public').asString()
