export { Page }
import Cta from "../../components/blocks/Cta"
import Row from "../../components/blocks/Row"
import Hero from "../../components/blocks/Hero"
import Pricing from '../../components/blocks/Pricing';
import { IDataLayoutResponse } from './types';

function Page({ layout }: { layout: IDataLayoutResponse }) {

  if (layout) {

    const { attributes } = layout.data[0]

    return (
      <div>
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
