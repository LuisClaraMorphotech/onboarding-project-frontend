export { Page }
import useFetch from "../../hooks/useFetch"
import { IDataResponse } from '../../types/types';
import load from "../../renderer/css/loading.svg"
import Cta from "../../components/blocks/Cta"
import Row from "../../components/blocks/Row"
import Hero from "../../components/blocks/Hero"
import Pricing from '../../components/blocks/Pricing';

function Page() {

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

  const { loading, error, data } = useFetch<IDataResponse>(`${API_URL}/api/landing-pages`);

  if (loading) return <img className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src={load} />
  
  if (error) {
    return <div><h1>Error :( </h1> <p>{error}</p></div>
  }

  if (data) {
    // console.log(data);
    const { attributes } = data.data[0]
    // console.log(attributes)
    return (
      <div>
        {/* <h1>{attributes.title}</h1>
        <h1>{attributes.description}</h1>
        <h1>{attributes.slug}</h1> */}
        {attributes ?
          attributes.blocks && attributes.blocks.map((block, index) => {
            const componentName = block.__component.split(".")[1][0].toUpperCase() + block.__component.split(".")[1].slice(1)
            switch (componentName) {
              case "Hero":
                return <Hero key={index} {...block} />
              case "Row":
                return <Row key={index} {...block}  />
              case "Pricing":
                return <Pricing key={index} {...block} />
              case "Cta":
                return <Cta key={index} {...block} />
              default:
                return null
            }
          })
          : null
        } 
      </div>
    )

  }
}
