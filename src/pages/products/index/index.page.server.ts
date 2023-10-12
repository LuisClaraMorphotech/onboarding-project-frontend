import fetch from 'node-fetch'
import type { IDataProductResponse, IDataLayoutResponse } from '../types'
import type { IDataAttributes } from '../../../types/types'

export { onBeforeRender }
export { prerender }

async function onBeforeRender() {
  await sleep(700) // Simulate slow network
  const data = await getAllProducts()
  const layout = await getLayout()

  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        data: data,
        layout: layout
      },
      // The page's <title>
      documentProps: { title: getTitle(layout) }
    }
  }
}

async function getAllProducts(): Promise<IDataProductResponse[]> {
  const API_URL = import.meta.env.VITE_API_LOCAL_URL || "http://127.0.0.1:1337";

  const response = await fetch(`${API_URL}/api/products?populate=deep,10`)

  const data = ((await response.json()) as IDataProductResponse[])

  // console.log("data", data);
  return data
}

async function getLayout(): Promise<IDataLayoutResponse> {
  const API_URL = import.meta.env.VITE_API_LOCAL_URL || "http://127.0.0.1:1337";

  const response = await fetch(`${API_URL}/api/product-page`)

  const data = ((await response.json()) as IDataLayoutResponse)

  // console.log("data", data);
  return data
}


// function filterMoviesData(movies: MovieDetails[]): Movie[] {
//   return movies.map((movie: MovieDetails) => {
//     const { title, release_date, id } = movie
//     return { title, release_date, id }
//   })
// }

async function prerender() {
  const data = await getAllProducts()
  const layout = await getLayout()

  return [
    {
      url: '/products',
      // We already provide `pageContext` here so that Vike
      // will *not* have to call the `onBeforeRender()` hook defined
      // above in this file.
      pageContext: {
        pageProps: {
          data: data,
          layout: layout
        },
        documentProps: { title: getTitle(layout) }
      }
    }
    // ,
    // ...data.map((data) => {
    //   const url = `/products/${data.id}`
    //   return {
    //     url,
    //     // Note that we can also provide the `pageContext` of other pages.
    //     // This means that Vike will not call any
    //     // `onBeforeRender()` hook and the Star Wars API will be called
    //     // only once (in this `prerender()` hook).
    //     pageContext: {
    //       pageProps: {
    //         data: data
    //       },
    //       documentProps: { data: data.title }
    //     }
    //   }
    // })
  ]
}

function getTitle(layout: IDataProductResponse | IDataLayoutResponse): string {

  let attributes: IDataAttributes | undefined;

    // Check if layout is IDataProductResponse
    if ('data' in layout && Array.isArray(layout.data)) {
        // Handle array case (IData[])
        if (layout.data.length > 0) {
            attributes = layout.data[0].attributes;
        }
    } else if ('data' in layout) {
        // Handle IDataLayoutResponse case (single IData)
        attributes = layout.data.attributes;
    }

    // if (attributes) {
    //     console.log("GET TITLE", attributes);
    //     // Do something with attributes here
    // } else {
    //     console.error("Error: Attributes not found");
    // }

    const title = `${attributes?.title}`;
    return title;
}

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}
