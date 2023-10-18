import Card from './Card'

const mockData = {
  "id": 1,
  "heading": "Security in saving",
  "description": "Take care to develop resources continually and integrity them with previous projects.",
  "image": {
      "data": {
          "id": 6,
          "attributes": {
              "name": "security.svg",
              "alternativeText": null,
              "url": "/uploads/security_aacc40245d.svg"
          }
      }
  }
}

describe('<Card />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card {...mockData} />)
  })
})
