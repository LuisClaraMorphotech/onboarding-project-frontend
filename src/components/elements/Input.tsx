import { CTAInput } from "../types"

const Input = (props: CTAInput) => {

    const { placeholder, label, inputType } = props

    return (
        <div className="flex flex-col p-2 w-full">
            <label className="text-[1/2rem]">{label}:</label>
            <input className="rounded-md bg-[rgb(255,255,255)] text-base pb-2 w-full p-2" type={inputType} placeholder={placeholder} />
        </div>
    )
}

export default Input