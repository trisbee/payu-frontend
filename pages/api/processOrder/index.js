export default async (req, res) => {
    res.statusCode = 200
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
}
