import fs from 'fs'

const contentFilePath = '../../content/'

function save(content:any,className:string) {
  const contentString = JSON.stringify(content)
  const filename = `${contentFilePath}${className}.json`
  return fs.writeFileSync(filename, contentString)
}

function load(className:string) {
  const filename = `${contentFilePath}${className}.json`
  const fileBuffer = fs.readFileSync(filename, 'utf-8')
  const contentJson = JSON.parse(fileBuffer)
  return contentJson
}

export default {
  save,
  load
}