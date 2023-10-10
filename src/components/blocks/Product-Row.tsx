import PageNotFound from "../../errors/PageNotFound";
import ProductCard from "../elements/Product-Card";
import { IProductRowBlock } from "../types"

const ProductRow = (props: IProductRowBlock) => {

    const { card } = props

    if (props) {

        return (
            <main className="flex flex-row flex-wrap w-full justify-center items-center my-4">
                {card && card.map(element => <ProductCard key={element.id} {...element} />)}
            </main>
        );


    } else {
        const data = {
            title: "Product-Row Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}

export default ProductRow