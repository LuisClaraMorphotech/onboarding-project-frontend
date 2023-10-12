import fetch from 'node-fetch'
import type { IDataProductResponse, IDataLayoutResponse } from './types'
import type { IDataAttributes } from '../../types/types'

export { onBeforeRender }
export { prerender }

async function onBeforeRender() {
  await sleep(700) // Simulate slow network
  const layout = await getLayout()

  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        layout: layout
      },
      // The page's <title>
      documentProps: { title: getTitle(layout) }
    }
  }
}

async function getLayout(): Promise<IDataLayoutResponse> {
  const API_URL = import.meta.env.VITE_API_LOCAL_URL || "http://127.0.0.1:1337";

  const response = await fetch(`${API_URL}/api/landing-pages`)

  const data = ((await response.json()) as IDataLayoutResponse)

  return data
}

async function prerender() {
  const layout = await getLayout()

  return [
    {
      url: '/',
      // We already provide `pageContext` here so that Vike
      // will *not* have to call the `onBeforeRender()` hook defined
      // above in this file.
      pageContext: {
        pageProps: {
          layout: layout
        },
        documentProps: { title: getTitle(layout) }
      }
    }
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

    const title = `${attributes?.title}`;
    return title;
}

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}
