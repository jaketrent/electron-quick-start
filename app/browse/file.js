export function create(nativeFile) {
  return {
    name: nativeFile.name,
    path: nativeFile.path,
    type: nativeFile.type,
    size: nativeFile.size,
    lastModifiedDate: nativeFile.lastModifiedDate
  }
}
