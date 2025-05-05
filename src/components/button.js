const createSearchButton = ({ text, onClick }) => {
  const button = document.createElement('button')

  // Add Tailwind CSS classes for styling
  button.className =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'
  button.textContent = text

  // Add an event listener for the button click
  button.addEventListener('click', onClick)

  return button
}

export default createSearchButton
