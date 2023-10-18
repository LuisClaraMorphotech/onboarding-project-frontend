import Input from './Input'

const props = { placeholder: "placeholder", label: "label", inputType: "text" }


describe('<Input />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Input {...props} />)

  })
  it('type in input', () => {

    cy.mount(<Input {...props} />)

    // Use cy.get to select the input element and cy.type to simulate typing
    const textToType = 'Hello, Cypress!';
    cy.get('input').type(textToType);

    // You can assert the input's value to verify if it received the typed text
    cy.get('input').should('have.value', textToType);
  })
})