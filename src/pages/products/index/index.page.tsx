
export { Page }

import { IDataProductResponse, IDataLayoutResponse } from '../types';
import CardRow from '../../../components/blocks/Card-Row';

function Page({ data, layout }: { data: IDataProductResponse, layout: IDataLayoutResponse }) {
  
  if (data && layout) {
    
    const { attributes } = layout.data
    
    return (
      <div className="flex flex-col justify-center items-center w-full">
        {attributes ?
          attributes.blocks && attributes.blocks.map((block, index) => {
            const componentName = block.__component.split(".")[1][0].toUpperCase() + block.__component.split(".")[1].slice(1)

            switch (componentName) {
              case "Card-row":
                return <CardRow {...data} key={index} name={block?.cardType?.data?.attributes?.name} />
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
