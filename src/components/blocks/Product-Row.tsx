// import PageNotFound from "../../errors/PageNotFound";
// import CardProduct from "../elements/CardProduct";
// import { IProductRowBlock } from "../types"

// const ProductRow = (props: IProductRowBlock) => {

//     const { card } = props

//     if (props) {
        
//         return (
//             <main className="flex flex-row flex-wrap w-full justify-center items-center my-4">
//                 {card && card.map(element => <CardProduct key={element.id} {...element} />)}
//             </main>
//         );


//     } else {
//         const data = {
//             title: "Product-Row Component",
//             text: "This component it's not mounting correctly"
//         }
//         return <PageNotFound {...data} />
//     }
// }

// export default ProductRow