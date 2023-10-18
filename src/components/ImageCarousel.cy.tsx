import ImageCarousel from './ImageCarousel'

const images = {
  "data": [
    {
      "id": 9,
      "attributes": {
        "name": "venator-75367.webp",
        "alternativeText": null,
        "caption": null,
        "width": 800,
        "height": 357,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_venator-75367.webp",
            "hash": "thumbnail_venator_75367_1270e5b062",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 245,
            "height": 109,
            "size": 6.98,
            "url": "/uploads/thumbnail_venator_75367_1270e5b062.webp"
          },
          "medium": {
            "name": "medium_venator-75367.webp",
            "hash": "medium_venator_75367_1270e5b062",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 750,
            "height": 335,
            "size": 37.62,
            "url": "/uploads/medium_venator_75367_1270e5b062.webp"
          },
          "small": {
            "name": "small_venator-75367.webp",
            "hash": "small_venator_75367_1270e5b062",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 500,
            "height": 223,
            "size": 20.81,
            "url": "/uploads/small_venator_75367_1270e5b062.webp"
          }
        },
        "hash": "venator_75367_1270e5b062",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 40.68,
        "url": "/uploads/venator_75367_1270e5b062.webp",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2023-10-09T21:29:09.713Z",
        "updatedAt": "2023-10-09T21:29:09.713Z"
      }
    },
    {
      "id": 10,
      "attributes": {
        "name": "venator-75367_alt1.webp",
        "alternativeText": null,
        "caption": null,
        "width": 800,
        "height": 767,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_venator-75367_alt1.webp",
            "hash": "thumbnail_venator_75367_alt1_32411ad78f",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 163,
            "height": 156,
            "size": 5.03,
            "url": "/uploads/thumbnail_venator_75367_alt1_32411ad78f.webp"
          },
          "medium": {
            "name": "medium_venator-75367_alt1.webp",
            "hash": "medium_venator_75367_alt1_32411ad78f",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 750,
            "height": 719,
            "size": 50.72,
            "url": "/uploads/medium_venator_75367_alt1_32411ad78f.webp"
          },
          "small": {
            "name": "small_venator-75367_alt1.webp",
            "hash": "small_venator_75367_alt1_32411ad78f",
            "ext": ".webp",
            "mime": "image/webp",
            "path": null,
            "width": 500,
            "height": 479,
            "size": 28.77,
            "url": "/uploads/small_venator_75367_alt1_32411ad78f.webp"
          }
        },
        "hash": "venator_75367_alt1_32411ad78f",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 56.7,
        "url": "/uploads/venator_75367_alt1_32411ad78f.webp",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2023-10-09T21:29:09.893Z",
        "updatedAt": "2023-10-09T21:29:09.893Z"
      }
    }
  ]
}
describe('<ImageCarousel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageCarousel images={images} />)

  })
})

describe('Carousel click', () => {
  it('click first image', () => {
    // see: https://on.cypress.io/mounting-react

    // mount component
    cy.mount(<ImageCarousel images={images} />)

    // Use cy.get to select the image element you want to click
    cy.get('[data-testid="thumbnail-image"]').first().as('thumbnail');

    // Click the image element
    cy.get('@thumbnail').click();

    // Perform assertions or other actions after the click event
    // For example, you can assert that the selected image has changed
    // You might need to adjust the assertion based on your specific application logic
    cy.get('@thumbnail').should('have.class', 'border border-gray-500 p-1/2');
    console.log("get", cy.get('@thumbnail'));

  })
})