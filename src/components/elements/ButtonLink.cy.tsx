import ButtonLink from './ButtonLink'

describe('<ButtonLink />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ButtonLink id={0} title={'test button'} link={'/'} isExternal={false} />)
  })
})