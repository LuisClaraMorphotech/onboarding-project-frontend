import Row from './Row'

const mockData = {
  "id": 1,
  "__component": "blocks.row",
  "card": [
      {
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
      },
      {
          "id": 2,
          "heading": "No errors",
          "description": "Take care to develop resources continually and integrity them with previous projects.",
          "image": {
              "data": {
                  "id": 5,
                  "attributes": {
                      "name": "error-circle.svg",
                      "alternativeText": null,
                      "url": "/uploads/error_circle_594e84f29d.svg"
                  }
              }
          }
      },
      {
          "id": 3,
          "heading": "Change of access",
          "description": "Take care to develop resources continually and integrity them with previous projects.",
          "image": {
              "data": {
                  "id": 4,
                  "attributes": {
                      "name": "lock.svg",
                      "alternativeText": null,
                      "url": "/uploads/lock_2a90f1d16a.svg"
                  }
              }
          }
      }
  ]
}

describe('<Row />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Row {...mockData}/>)
  })
})