export { Page }
import useFetch from "../../hooks/useFetch"
import { IDataProductResponse } from '../../types/types';
import load from "../../renderer/css/loading.svg"
import ProductRow from '../../components/blocks/Product-Row';


function Page() {

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

  const { loading, error, data } = useFetch<IDataProductResponse>(`${API_URL}/api/product-page`);

  if (loading) return <img className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src={load} />

  if (error) {
    return <div><h1>Error :( </h1> <p>{error}</p></div>
  }


  if (data) {
    const { attributes } = data.data
    return (
      <div>
        <>
          <h1>Shop</h1>
          <p>This page is to render product list</p>
          {attributes ?
          attributes.blocks && attributes.blocks.map((block, index) => {
            const componentName = block.__component.split(".")[1][0].toUpperCase() + block.__component.split(".")[1].slice(1)
            switch (componentName) {
              case "Product-row":
                return <ProductRow key={index} {...block} />
              default:
                return null
            }
          })
          : null
        } 
        </>
      </div>
    )

  }
}
