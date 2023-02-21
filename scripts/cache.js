const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob');

function docsData() {
    let basePath = path.join(process.cwd(), '/src/docs').replaceAll('\\' , '/');
    let paths = glob.sync(basePath + '/**/*.md')

    let docsData = paths.map((filePath) => {
        let file =  fs.readFileSync(filePath, 'utf8');

        const { data : meta, content } = matter(file);
        return {
            meta ,
            content,
            path : filePath.replace(basePath , "").replace(".md" , "")
        }
    })

    return `export const docs = ${JSON.stringify(docsData)}`
}

try {
    fs.readdirSync('cache')
} catch (e) {
    fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', docsData(), function (err) {
    if (err) return console.log(err);
    console.log('Documents cached.');
})
