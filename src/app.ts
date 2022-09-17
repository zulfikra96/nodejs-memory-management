import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
    return res.send("Hello world")
})

app.listen(port, () => {
    return console.log("Run program on port %s", port)
})