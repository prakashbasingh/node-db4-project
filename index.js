const server = require("./api/server.js")

const PORT =process.env.PORT || 9999

server.listen(PORT, () => {
    console.log(`\n ||======>> server running on port ${PORT} <<======|| \n`)
})