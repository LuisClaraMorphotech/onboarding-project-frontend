// export { render }
// // See https://vike.dev/data-fetching
// export const passToClient = ['pageProps', 'urlPathname']

// import ReactDOMServer from 'react-dom/server'
// import { PageShell } from './PageShell'
// import { escapeInject, dangerouslySkipEscape } from 'vike/server'
// import logoUrl from '../assets/logo.svg'
// import type { PageContextServer } from './types'
// import './css/index.css'
// async function render(pageContext: PageContextServer) {
//   const { Page, pageProps } = pageContext
//   // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
//   if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
//   const pageHtml = ReactDOMServer.renderToString(
//     <PageShell pageContext={pageContext}>
//       <Page {...pageProps} />
//     </PageShell>
//   )

//   // See https://vike.dev/head
//   const { documentProps } = pageContext.exports
//   const title = (documentProps && documentProps.title) || 'Lego SSR app'
//   const desc = (documentProps && documentProps.description) || 'App using Vite + Vike'

//   const documentHtml = escapeInject`<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <link rel="icon" href="${logoUrl}" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="${desc}" />
//         <title>${title}</title>
//       </head>
//       <body>
//         <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
//       </body>
//     </html>`

//   return {
//     documentHtml,
//     pageContext: {
//       // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
//     }
//   }
// }

import ReactDOMServer from 'react-dom/server'
// import { renderToStream } from 'react-streaming/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'
// import { getPageTitle } from './getPageTitle'
import type { PageContextServer } from './types'
import logoUrl from '../assets/logo.svg'


export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  
  // console.log(pageContext);

  // const stream = await renderToStream(
  //   <PageShell pageContext={pageContext}>
  //     <Page {...pageProps} />
  //   </PageShell>,
  //   // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
  //   { disable: true }
  // )

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // const title = getPageTitle(pageContext)
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Lego SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + Vike'
  // const titleOnSocials = documentProps?.titleOnSocials || title;
  const image = documentProps?.image || logoUrl;
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
      <meta charset="UTF-8" />
         <link rel="icon" href="${image}" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42
      }
    }
  }
}