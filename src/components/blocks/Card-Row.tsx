import PageNotFound from "../../errors/PageNotFound";
import { LegoSet } from "../types";
import CardProduct from "../elements/CardProduct";

interface CardRowData {
    data: LegoSet[]
    name: string | undefined
}

const CardRow = (props: CardRowData) => {

    if (props && props?.data) {
        const componentName = props.name

        let data = props?.data

        let filterValue: string | null = "all"

        if (typeof window !== 'undefined') {
            filterValue = sessionStorage.getItem("filterProduct")
        }

        switch (filterValue) {
            case "all":
                null
                break
            case "Exclusives":
                data = data.filter(element => element.attributes.categories.data.find(category => category.attributes.name.toLowerCase() == "exclusives"))
                break;
            case "Coming Soon":
                data = data.filter(element => element.attributes.categories.data.find(category => category.attributes.name.toLowerCase() == "coming soon"))
                break
            case "Bestsellers":
                data = data.filter(element => element.attributes.categories.data.find(category => category.attributes.name.toLowerCase() == "bestsellers"))
                break
            case "New":
                data = data.filter(element => element.attributes.categories.data.find(category => category.attributes.name.toLowerCase() == "new"))
                break
            default:
                null
                break
        }

        return (
            <div className="w-full">
                <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:mt-12 xl:grid-cols-6 xl:mt-12 ">
                    {
                        data ?
                            data && data.map((element, index) => {
                                switch (componentName) {
                                    case "card-product":
                                        return <div key={index}> <CardProduct {...element} /></div>
                                    default:
                                        return null
                                }
                            })
                            : null
                    }
                </div>
            </div>
        )

    } else {
        const data = {
            title: "Card-Row Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}


export default CardRow