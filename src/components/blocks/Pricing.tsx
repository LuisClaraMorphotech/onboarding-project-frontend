import PricingCard from "../elements/PricingCard";
import {PricingBlock} from "../types"
import PageNotFound from "../../errors/PageNotFound";

const Pricing = (props:PricingBlock) => {

    if (props) {
       
        const {name, description, plan} = props

        return (
          <main className="flex flex-col">
              <section className="max-md:flex-col flex p-4 justify-center items-end">
                  <h3 className="text-3xl p-4">{name}</h3>
                  <p className="text-base p-4">{description}</p>
              </section>
              <section className="mt-2 flex p-4 justify-center max-md:flex-col">
                 {plan && plan.map(service => <PricingCard key={service.id} {...service}/>) }
              </section>
          </main>
        )

    } else {
        const data = {
            title: "Pricing Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}

export default Pricing