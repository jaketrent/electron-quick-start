import fs from 'fs'

import * as fileUtils from './file'

export function create(nativeFile) {
  return {
    name: nativeFile.name,
    path: nativeFile.path,
    type: 'directory',
    lastModifiedDate: nativeFile.lastModifiedDate
  }
}

export function getImageFiles(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory.path, (err, fileNames) => {
      if (err) return reject(err)

      resolve(
        fileNames
          .map(name => fileUtils.createFromFileName(name, directory))
          .filter(fileUtils.byImage)
      )
    })
  })
}
