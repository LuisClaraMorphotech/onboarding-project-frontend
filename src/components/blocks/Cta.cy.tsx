import Cta from './Cta'

const mockData = {
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

describe('<Cta />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cta {...mockData} />)
  })
})