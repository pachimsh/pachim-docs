import { docs } from '../../../cache/data';
import Fuse from 'fuse.js'

export async function GET (req)  {

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
    const searchParams = req.nextUrl.searchParams
    const results = searchParams.get('q') ? fuse.search(searchParams.get('q')) : [];
    return new Response(JSON.stringify({ results }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })

}
