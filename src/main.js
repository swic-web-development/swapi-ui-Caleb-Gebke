// main.js
import createSearchButton from './components/button'
import { Input } from './components/input'
import createLabel from './components/label'
import TextArea from './components/textarea'

// Fetch data from SWAPI
async function fetchStarWarsData(endpoint) {
  const response = await fetch(`https://swapi.dev/api/${endpoint}/`)
  const data = await response.json()
  return data.results
}

// Render data to the DOM
function renderData(data, container) {
  container.innerHTML = '' // Clear previous content

  data.forEach((item) => {
    const cardElement = document.createElement('div')
    cardElement.className = 'bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4'

    const cardTitle = item.name || item.title
    const cardDetails = item.url

    cardElement.innerHTML = `
      <h2 class="text-xl font-bold mb-2">${cardTitle}</h2>
      <p class="text-sm">Details: ${cardDetails}</p>
    `

    container.appendChild(cardElement)
  })
}

// Initialize the app
function init() {
  const appContainer = document.getElementById('app')
  appContainer.className = 'container mx-auto p-4'

  // Header Section
  const appHeader = document.createElement('h1')
  appHeader.className = 'text-3xl font-bold text-center text-yellow-400 mb-6'
  appHeader.textContent = 'Star Wars API Explorer'
  appContainer.appendChild(appHeader)

  // Form Section
  const formWrapper = document.createElement('div')
  formWrapper.className = 'mb-6'
  appContainer.appendChild(formWrapper)

  // Label for Search Input
  const searchLabel = createLabel('Search Star Wars Data:', 'search-input')
  formWrapper.appendChild(searchLabel)

  // Search Input Field
  const searchInputField = Input({
    id: 'search-input',
    placeholder: 'Enter a keyword...',
  })
  searchInputField.className = 'border border-gray-300 rounded px-4 py-2 w-full mb-4'
  formWrapper.appendChild(searchInputField)

  // Notes Text Area
  const notesTextArea = TextArea({
    id: 'notes',
    placeholder: 'Write your notes here...',
  })
  notesTextArea.className = 'border border-gray-300 rounded px-4 py-2 w-full mb-4'
  formWrapper.appendChild(notesTextArea)

  // Search Button
  const searchActionButton = createSearchButton({
    text: 'Search',
    onClick: () => {
      const errorMessage = document.createElement('div')
      errorMessage.className = 'text-red-500 font-bold mt-4'
      errorMessage.textContent = 'Search functionality not implemented yet!'
      formWrapper.appendChild(errorMessage)
    },
  })
  formWrapper.appendChild(searchActionButton)

  // Button Section for Endpoints
  const endpointButtonGroup = document.createElement('div')
  endpointButtonGroup.className = 'flex justify-center space-x-4 mb-6'
  appContainer.appendChild(endpointButtonGroup)

  // Endpoint Buttons
  const apiEndpoints = ['people', 'planets', 'starships']
  apiEndpoints.forEach((endpoint) => {
    const endpointButton = createSearchButton({
      text: `Load ${endpoint}`,
      onClick: async () => {
        const endpointData = await fetchStarWarsData(endpoint)
        renderData(endpointData, contentGrid)
      },
    })
    endpointButton.className =
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    endpointButtonGroup.appendChild(endpointButton)
  })

  // Content Grid for Displaying Data
  const contentGrid = document.createElement('div')
  contentGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
  appContainer.appendChild(contentGrid)
}

// Run the app
document.addEventListener('DOMContentLoaded', init)
