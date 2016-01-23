import path from 'path'

export function create(nativeFile) {
  return {
    name: nativeFile.name,
    path: nativeFile.path,
    type: nativeFile.type,
    size: nativeFile.size,
    lastModifiedDate: nativeFile.lastModifiedDate
  }
}

// NOTE: naive image type
export function createFromFileName(fileName, directory) {
  return {
    name: fileName,
    path: path.join(directory.path, fileName),
    type: getMimeTypeFromExt(getExtensionFromFileName(fileName)),
    size: -1,
    lastModifiedDate: null
  }
}

export function extensionIsImage(fileName) {
  return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileName)
}

function getExtensionFromFileName(fileName) {
  return fileName.replace(/.*\.(\w+)/i, '$1')
}

const extToMimes = {
  'gif': 'image/gif',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'tiff': 'image/tiff'
}

function getMimeTypeFromExt(ext) {
  return extToMimes[ext.toLowerCase()]
}

export function byImage(file) {
  return file && file.type && (/image\/(gif|jpg|jpeg|tiff|png)$/i).test(file.type)
}
