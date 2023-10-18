import React from 'react'
import { PageShell } from './PageShell'

describe('<PageShell />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageShell />)
  })
})