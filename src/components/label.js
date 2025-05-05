function createLabel(labelText, additionalClasses = '') {
  const labelElement = document.createElement('span')
  labelElement.textContent = labelText

  if (additionalClasses) {
    labelElement.className = additionalClasses
  }

  return labelElement
}

export default createLabel
