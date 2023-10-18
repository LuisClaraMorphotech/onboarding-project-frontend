import Image from "../Image";
import { ICard } from "../types"

const Card = (props:ICard) => {
   
    const {heading, description, image} = props

    const imageUrl = image?.data?.attributes?.url || '';
    const imageName = image?.data?.attributes?.name || '';
    const alternativeText = image?.data?.attributes?.alternativeText || '';

    const imageProps = {
        url:[import.meta.env.VITE_API_URL, imageUrl].join(''), name:imageName, alt:alternativeText, style:"w-12 h-12"
    }

  return (
    <div className="flex flex-col justify-center m-4 p-4 bg-[#F8F9FC]">
        <div className="flex justify-center items-center w-16 h-16 border m-4  border-[#020B49] bg-[#EDF2FF]  rounded-full">
            <Image {...imageProps} />
        </div>
       <h3 className="text-xl p-2">{heading}</h3>
       <p className="text-base p-2">{description}</p>
    </div>
  )
}

export default Card