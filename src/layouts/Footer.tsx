import logo from '../assets/logo.svg'

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-[#02044A] text-gray-300 py-8 px-6'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
                <div className="flex flex-col">
                    <div className='mt-5 mb-3'>
                        <a href="/">
                            <img src={logo} height={64} width={64} alt="logo" />
                        </a>
                    </div>
                    <p>LOCATION: </p>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>ABOUT US</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>SUPPORT</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>ATTRACTIONS</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>MORE FROM US</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div className='col-span-2 pt-2 md:pt-2 lg:pt-8'>
                    <p className='font-bold uppercase'>Subscribe To Our Newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources
                        sent to your inbox weekly.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md  mb-2' type="email" placeholder="Enter your email" />
                        <button className='p-2 mb-2 bg-[#FD8024] w-[10%] rounded-2xl '> {">"} </button>

                    </form>

                </div>

            </div>


            <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
                <p>©  Lego. All rights reserved.</p>
                <div className='flex flex-col justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                    <h6 className='font-bold uppercase py-2'>FOLLOW US</h6>
                    <div className="flex">
                        <p>social media icons</p>
                        <p>social media icons</p>
                        <p>social media icons</p>
                        <p>social media icons</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer