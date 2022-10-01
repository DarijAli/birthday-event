export const getBase64File = async (file) => {
  var reader = new FileReader()
  reader.readAsDataURL(file)

  const result = await new Promise((reslove, reject) => {
    reader.onload = () => reslove(reader.result)
    reader.onerror = (error) => reject(error)
  })

  return result
}
