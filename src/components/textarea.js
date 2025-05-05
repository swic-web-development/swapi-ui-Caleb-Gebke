const createTextArea = ({ id, placeholder, additionalClasses = '' }) => {
  const textAreaElement = document.createElement('textarea')
  textAreaElement.id = id
  textAreaElement.placeholder = placeholder
  textAreaElement.className = `border border-gray-300 rounded px-4 py-2 w-full mb-4 ${additionalClasses}`

  return textAreaElement
}

export default createTextArea
