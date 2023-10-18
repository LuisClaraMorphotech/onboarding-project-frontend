export { Page }

import InternalServerError from "../errors/InternalServerError"
import PageNotFound from "../errors/PageNotFound"
import './css/index.css'
function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
       <PageNotFound title={""} text={""} />
      </>
    )
  } else {
    return (
      <>
       <InternalServerError/>
      </>
    )
  }
}
