import React from 'react'
import { Page } from './index.page'

describe('<Page />', () => {
  it('renders', () => {

    const layout = {
      "data": [
          {
              "id": 1,
              "attributes": {
                  "title": "Strapi",
                  "description": "Strapi landing page",
                  "slug": "strapi",
                  "createdAt": "2023-10-06T14:02:26.194Z",
                  "updatedAt": "2023-10-10T08:46:23.306Z",
                  "publishedAt": "2023-10-06T14:02:26.789Z",
                  "metadata": {
                      "id": 1,
                      "metaTitle": "Strapi landing page",
                      "metaDescription": "Strapi landing page",
                      "metaImage": {
                          "data": {
                              "id": 3,
                              "attributes": {
                                  "name": "light-dark-side.6eaf8b4566bb57bc.png",
                                  "alternativeText": null,
                                  "url": "/uploads/light_dark_side_6eaf8b4566bb57bc_5c5f63b924.png"
                              }
                          }
                      }
                  },
                  "blocks": [
                      {
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
                      },
                      {
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
                      },
                      {
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
                      },
                      {
                          "id": 1,
                          "__component": "blocks.cta",
                          "heading": "Call to action",
                          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis posuere turpis ullamcorper aliquet. Duis eu lorem erat. Aenean malesuada mattis dictum. Aenean vitae euismod ipsum. Nulla consectetur ut metus ac condimentum.",
                          "form": {
                              "id": 1,
                              "heading": "Stay in touch:",
                              "description": "In case of you need any help in our website.",
                              "input": [
                                  {
                                      "id": 1,
                                      "placeholder": "Enter your full name",
                                      "label": "Full Name",
                                      "inputType": "text"
                                  },
                                  {
                                      "id": 2,
                                      "placeholder": "Enter your email",
                                      "label": "Email",
                                      "inputType": "email"
                                  },
                                  {
                                      "id": 3,
                                      "placeholder": "Message",
                                      "label": "Message",
                                      "inputType": "text"
                                  }
                              ],
                              "button": {
                                  "id": 5,
                                  "title": "Submit",
                                  "link": "/subscription",
                                  "isExternal": false,
                                  "type": "PRIMARY"
                              }
                          }
                      }
                  ]
              }
          }
      ],
      "meta": {
          "pagination": {
              "page": 1,
              "pageSize": 25,
              "pageCount": 1,
              "total": 1
          }
      }
  }
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Page {...layout}/>)
  })
})