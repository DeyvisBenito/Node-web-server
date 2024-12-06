import {PORT, PUBLIC_PATH} from './config/env.js'
import {startServer} from './server/server.js'

const main = () => {
    const option = {
        PORT,
        PUBLIC_PATH
    }
    startServer(option)
}

(async () => main())()

