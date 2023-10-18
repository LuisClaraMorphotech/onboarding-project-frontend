import Pricing from './Pricing'

const mockData = {
  "id": 1,
  "__component": "blocks.pricing",
  "name": "Subscription Plans",
  "description": "Explore our subscription plans below:",
  "plan": [
      {
          "id": 1,
          "planType": "Starter",
          "planPrice": "34,99",
          "isFeatured": false,
          "services": {
              "data": [
                  {
                      "id": 1,
                      "attributes": {
                          "name": "service-1",
                          "description": "Complete documentation",
                          "createdAt": "2023-10-06T14:26:31.616Z",
                          "updatedAt": "2023-10-09T17:43:09.082Z"
                      }
                  },
                  {
                      "id": 2,
                      "attributes": {
                          "name": "service-2",
                          "description": "Working materials in Figma",
                          "createdAt": "2023-10-06T14:27:06.220Z",
                          "updatedAt": "2023-10-09T17:43:14.352Z"
                      }
                  }
              ]
          },
          "link": {
              "id": 2,
              "title": "Try it now",
              "link": "/free-plan",
              "isExternal": false,
              "type": "SECONDARY"
          }
      },
      {
          "id": 2,
          "planType": "Pro",
          "planPrice": "65,99",
          "isFeatured": true,
          "services": {
              "data": [
                  {
                      "id": 1,
                      "attributes": {
                          "name": "service-1",
                          "description": "Complete documentation",
                          "createdAt": "2023-10-06T14:26:31.616Z",
                          "updatedAt": "2023-10-09T17:43:09.082Z"
                      }
                  },
                  {
                      "id": 2,
                      "attributes": {
                          "name": "service-2",
                          "description": "Working materials in Figma",
                          "createdAt": "2023-10-06T14:27:06.220Z",
                          "updatedAt": "2023-10-09T17:43:14.352Z"
                      }
                  },
                  {
                      "id": 3,
                      "attributes": {
                          "name": "service-3",
                          "description": "100Gb cloud storage",
                          "createdAt": "2023-10-06T14:27:14.252Z",
                          "updatedAt": "2023-10-09T17:43:18.986Z"
                      }
                  }
              ]
          },
          "link": {
              "id": 3,
              "title": "Try it now",
              "link": "/pro-plan",
              "isExternal": false,
              "type": "PRIMARY"
          }
      },
      {
          "id": 3,
          "planType": "Premium",
          "planPrice": "99.99",
          "isFeatured": false,
          "services": {
              "data": [
                  {
                      "id": 1,
                      "attributes": {
                          "name": "service-1",
                          "description": "Complete documentation",
                          "createdAt": "2023-10-06T14:26:31.616Z",
                          "updatedAt": "2023-10-09T17:43:09.082Z"
                      }
                  },
                  {
                      "id": 2,
                      "attributes": {
                          "name": "service-2",
                          "description": "Working materials in Figma",
                          "createdAt": "2023-10-06T14:27:06.220Z",
                          "updatedAt": "2023-10-09T17:43:14.352Z"
                      }
                  },
                  {
                      "id": 3,
                      "attributes": {
                          "name": "service-3",
                          "description": "100Gb cloud storage",
                          "createdAt": "2023-10-06T14:27:14.252Z",
                          "updatedAt": "2023-10-09T17:43:18.986Z"
                      }
                  },
                  {
                      "id": 4,
                      "attributes": {
                          "name": "service-4",
                          "description": "500 team members",
                          "createdAt": "2023-10-06T14:27:20.565Z",
                          "updatedAt": "2023-10-09T17:43:24.068Z"
                      }
                  },
                  {
                      "id": 5,
                      "attributes": {
                          "name": "service-5",
                          "description": "Premium support",
                          "createdAt": "2023-10-06T14:27:26.353Z",
                          "updatedAt": "2023-10-09T17:43:28.386Z"
                      }
                  }
              ]
          },
          "link": {
              "id": 4,
              "title": "Try it now",
              "link": "/enterprise-plan",
              "isExternal": false,
              "type": "SECONDARY"
          }
      }
  ]
}

describe('<Pricing />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Pricing {...mockData}/>)
  })
})