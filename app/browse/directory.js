export function create(nativeFile) {
  return {
    name: nativeFile.name,
    path: nativeFile.path,
    type: 'directory',
    lastModifiedDate: nativeFile.lastModifiedDate
  }
}
