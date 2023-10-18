import Hero from './Hero'

const mockData = {
  "id": 1,
  "__component": "blocks.hero",
  "heading": "Take care of your performance every day",
  "text": "Build a well-presented brand that everyone will love. Take care to develop resources continually and integrity them with previous projects.",
  "link": {
      "id": 1,
      "title": "Track your performance",
      "link": "https://sentry.io",
      "isExternal": true,
      "type": "PRIMARY"
  },
  "image": {
      "data": {
          "id": 2,
          "attributes": {
              "name": "Performance Review Software.png",
              "alternativeText": null,
              "url": "/uploads/Performance_Review_Software_c6864e2111.png"
          }
      }
  }
}

describe('<Hero />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hero {...mockData} />)
  })
})