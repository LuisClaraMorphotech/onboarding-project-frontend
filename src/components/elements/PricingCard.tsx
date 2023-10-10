import ButtonLink from './ButtonLink';
import { Plan } from '../types';

const PricingCard = (props: Plan) => {

    const { isFeatured, planType, planPrice, services, link } = props

    return (
        <div className={`max-md:w-full w-2/4 flex flex-col m-4 p-2 border ${isFeatured ? "bg-[#020B49] text-[#fff]" : "bg-[#F8F9FC] mt-10 border-stone-700"}  h-[35rem]`}>
            <div className='flex flex-col justify-start items-center my-6 pt-4 h-1/4'>
                <p className="text-base">{planType}</p>
                <h5 className="flex flex-row justify-start  text-4xl p-4">
                    <span className={`text-start text-sm ${isFeatured ? " text-[#CF3BE6]" : "bg-[#F8F9FC]"}`}>
                        $
                    </span>
                    {planPrice}
                </h5>
            </div>
            <div className='flex flex-col justify-start items-center mb-6 h-1/4'>
                <ul>
                    {services.data.map(service => <li className='text-base leading-[3rem]' key={service.id} id={service.attributes.name}>{service.attributes.description}</li>)}
                </ul>
            </div>
            <div className='flex relative justify-center items-end h-full mt-6 mx-auto py-8 w-3/4'>
                <ButtonLink {...link} />
            </div>
        </div>
    )
}

export default PricingCard