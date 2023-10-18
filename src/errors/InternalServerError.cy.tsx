import React from 'react'
import InternalServerError from './InternalServerError'

describe('<InternalServerError />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InternalServerError />)
  })
})