import Image from './Image'

describe('<Image />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const imageProps = {
      url:"http://localhost:1337/uploads/X_Wing_75355_080c884d2c.webp", name:"X_Wing", alt:"X_Wing", style:"w-full h-full rounded-xl"
  }
    cy.mount(<Image {...imageProps}/>)
  })
})