import { CTAForm } from "../types"
import ButtonLink from "./ButtonLink"
import Input from "./Input"

const Form = (props: CTAForm) => {

    const { heading, description, input, button } = props

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="p-4">
                <h3 className="font-bold text-2xl pb-2">{heading}</h3>
                <h3 className="text-base pb-2">{description}</h3>
            </div>
            <div className="w-[16rem]">
                {input && input.map(element => <Input key={element.id} {...element} />)}
            </div>
            <div className="flex justify-center items-center w-[17rem] p-4">
                {button && <ButtonLink {...button} />}
            </div>
        </div>
    )
}

export default Form