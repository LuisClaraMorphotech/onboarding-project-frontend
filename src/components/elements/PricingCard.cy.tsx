import PricingCard from './PricingCard'

describe('<PricingCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PricingCard id={0} planType={'Starter'} planPrice={'00,00'} isFeatured={false} services={{
      data: [
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
    }} link={{
      id: 2,
      title: 'Try it now',
      link: '/free-plan',
      isExternal: false,
      type: 'SECONDARY'
    }} />)
  })
})
