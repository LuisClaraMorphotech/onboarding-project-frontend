import Card from "../elements/Card";
import PageNotFound from "../../errors/PageNotFound";
import { RowBlock } from "../types";


const Row = (props: RowBlock) => {

    if (props) {
        const { card } = props;

        return (
            <main className="flex flex-col w-full justify-center items-center my-4">
                <section className="flex w-full max-sm:flex-col justify-center">
                   {card && card.map(element => <Card key={element.id} {...element} />)}
                </section>
            </main>
        );


    } else {
        const data = {
            title: "Row Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}

export default Row