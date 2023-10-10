import Image from "../Image";
import { IProductCard } from "../types"

const ProductCard = (props: IProductCard) => {
    console.log(props);

    const { image, link, price, title } = props

    const imageUrl = image?.data?.attributes?.url || '';
    const imageName = image?.data?.attributes?.name || '';
    const alternativeText = image?.data?.attributes?.alternativeText || '';

    const imageProps = {
        url: [import.meta.env.VITE_API_URL, imageUrl].join(''), name: imageName, alt: alternativeText, style: "w-12 h-12"
    }

    return (
        <div className="flex felx-col  justify-center m-4 p-4 bg-[#F8F9FC]">
                <Image {...imageProps} />
            <div className="flex justify-center items-center">
            </div>
            {/* 
                <h3 className="text-xl p-2">{heading}</h3>
                <p className="text-base p-2">{description}</p>
            */}
        </div>
    )
}

export default ProductCard