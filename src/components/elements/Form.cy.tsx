import React from 'react'
import Form from './Form'

const mockData = {
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

describe('<Form />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form {...mockData}/>)
  })
})