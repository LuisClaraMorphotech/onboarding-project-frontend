import Form from "../elements/Form";
import { CTABlock } from "../types"
import PageNotFound from "../../errors/PageNotFound";

const Cta = (props: CTABlock) => {
    // console.log(props);

    if (props) {
        const { heading, description, form } = props;

        return (
            <main className="flex flex-row w-full justify-center items-center p-6 bg-[#2A2974] text-[#fff]">
                <section className="flex flex-col w-2/4 justify-center items-center">
                    {heading && <h5>{heading}</h5>}
                    {description && <h5>{description}</h5>}
                </section>
                <section className="flex flex-col w-2/4 justify-center items-center rounded-xl p-4 bg-[#EDF2FF] text-[#000]">
                    {form && <Form {...form} />}
                </section>
            </main>
        )


    } else {
        const data = {
            title: "Cta Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}

export default Cta