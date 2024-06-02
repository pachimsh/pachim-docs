import { docs } from '../../../cache/data';
import Fuse from 'fuse.js'

export default (req, res) => {
    const options = {
        shouldSort: true,
        tokenize:true,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            {
                name : 'meta.title',
                weight : 0.8
            },
            {
                name : 'content',
                weight: 0.3
            }
        ]
    }

    const fuse = new Fuse(docs, options)

    const results = req.query.q ? fuse.search(req.query.q) : [];

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}
