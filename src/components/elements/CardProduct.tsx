import { LegoSet } from "../types"
import heart from "../../assets/heart.svg"
import piece from "../../assets/piece.svg"
import ageSmall from "../../assets/age-small.svg"
import { Link } from "../Link"

const CardProduct = (props: LegoSet) => {

    const {
        id,
        attributes: {
            // stockKeepingUnit,
            name,
            // description,
            price,
            recommendedAge,
            // stockLimit,
            pieceCount,
            // insidersPoints,
            // miniFigures,
            comingSoon,
            // dimensions,
            // specifications,
            coverImage,
            categories
        } } = props

    return (
        <div className = "bg-white relative h-full rounded-sm shadow-lg my-2 border border-gray-300 px-1/2 py-1/2 flex flex-col justify-center items-center" >
            <div className = 'flex items-center w-full justify-between absolute top-2  left-0 right-4 pt-[0] px-4 pb-0.5' >
                <div className='bg-gray-100 rounded-3xl w-7 h-7 flex justify-center items-center'>
                    <img src={heart} className="w-5 h-5" />
                </div>
                <div className={`flex justify-center items-center bg-gray-100 w-50 h-6 px-1 border-l-4 border-solid ${comingSoon ? "border-[#2574BB]" : "border-yellow-500"} `}>
                    <p className='font-medium text-sm '>{categories.data[0].attributes.name}</p>
                </div>
            </ div>
            <img className='my-2 mt-12 h-[150px]' src={`${import.meta.env.VITE_API_URL}${coverImage.data.attributes.formats.thumbnail.url}`} />
            <div className='flex flex-col justify-start w-full'>
                <div className="flex flex-col  px-6 pt-4 pb-8">
                    <div className='flex flex-row w-full justify-start my-4'>
                        <div className='flex flex-row justify-start items-center'>
                            <div className='w-5 h-5 mr-1 flex items-center justify-center'>
                                <img src={ageSmall} />
                            </div>
                            <p className='text-sm'>{recommendedAge}+</p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <div className='w-5 h-5 ml-4 mr-1   flex items-center justify-center'>
                                <img src={piece} />
                            </div>
                            <p className='text-sm'>{pieceCount}</p>
                        </div>
                    </div>
                    <h2 className='font-bold'>{name}</h2>
                    <p className='font-bold py-3 mt-2'>{price}$</p>
                </div>
            </div>
                <div className='absolute bottom-0 flex flex-col w-full px-4'>
                    <Link href={`/products/${id}`}>
                        {comingSoon ?
                            <p className='mb-2 text-[#2574BB] w-1/2 flex justify-center rounded-3xl hover:bg-[#2574BB] hover:text-white'>Coming soon</p>
                            :
                            <button className='mb-2 bg-[#F47D20] w-1/4 flex justify-center rounded-3xl'>View</button>
                        }
                    </Link>
                </div>
        </div >
    )
}

export default CardProduct