import fetch from 'cross-fetch'
import type { PageContextBuiltInServer } from 'vike/types'
import type { IDataSingleProductResponse } from './types'
import type { IDataProduct } from "../../components/types/index"
import { RenderErrorPage } from 'vike/RenderErrorPage'
import ImageCarousel from '../../components/ImageCarousel'
// import heart from "../../assets/heart.svg"
import piecesSvg from "../../assets/pieceSingleProduct.svg"
import ageLargeSvg from "../../assets/age-large.svg"
import insidersPointSvg from "../../assets/insider-point.svg"
import hashItemSvg from "../../assets/sku.svg"
import minifiguresSvg from "../../assets/minifigure.svg"
import dimensionSvg from "../../assets/dimensions.svg"
import Markdown from "react-markdown";

export { Page }
export { onBeforeRender }

function Page({ product }: { product: IDataProduct }) {

  const {
    attributes: {
      stockKeepingUnit,
      name,
      description,
      price,
      recommendedAge,
      // stockLimit,
      pieceCount,
      insidersPoints,
      miniFigures,
      comingSoon,
      dimensions,
      specifications,
      categories,
      images
    } } = product.data

  return (
    <main className='flex flex-col w-full justify-center items-center'>
      <section className='flex flex-col w-full justify-start items-start mb-12'>
        <div className='flex w-full p-4 justify-center items-center'>
          <div className='w-3/4 py-4'>
            <ImageCarousel images={images} />
          </div>
          <div className='w-1/4 p-4 h-[400px] border-t border-gray-200'>
            <div className='flex flex-col '>
              {categories && categories.data.map(category => (
                <div key={category.id} className="flex justify-center items-center bg-[#FFCF00] w-fit h-6 px-1 mb-2 ">
                  <p className='font-medium text-sm '>{category.attributes.name}</p>
                </div>
              ))}
            </div>

            <p className='py-4 text-2xl font-medium'>{name}</p>
            <p className='py-4 text-3xl font-semibold'>{price}</p>
            {comingSoon ? <p className='text-sm text-[#2574BB]'>When released</p> : <p className='text-sm text-[#028537]'>Will be shipped tomorrow</p>}
          </div>
        </div>
        <div className='flex w-3/4 justify-center items-center px-3'>

          {/* <div className='w-full h-[150px] flex flex-col justify-start items-center border-r border-gray-200 p-2'> */}
          {recommendedAge && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem]  max-h-[8rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={ageLargeSvg} />
            </div>
            <div className='h-[50px] flex items-center justify-center'>
              <p className='text-xl'>{recommendedAge} +</p>
            </div>
            <p className='text-[0.8rem] pt-2'>Ages</p>
          </div>}

          {/* <div className='w-full h-[150px] flex flex-col justify-start items-center border-r border-gray-200 p-2'> */}
          {pieceCount && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={piecesSvg} />
            </div>
            <div className='h-[50px] flex items-center justify-center'>
              <p className='text-xl'>{pieceCount}</p>
            </div>
            <p className='text-[0.8rem] pt-2'>Pieces</p>
          </div>}

          {/* <div className='w-full h-[150px] flex flex-col justify-center items-center border-r border-gray-200 p-2'> */}
          {insidersPoints && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={insidersPointSvg} />
            </div>
            <div className='h-[50px] flex items-center justify-center'>
              <p className='text-xl'>{insidersPoints}</p>
            </div>
            <p className='text-[0.8rem] pt-2'>Insiders Points</p>
          </div>}

          {/* <div className='w-full h-[150px] flex flex-col justify-start items-center border-r border-gray-200 p-2'> */}
          {stockKeepingUnit && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={hashItemSvg} />
            </div>
            <div className='h-[50px] flex items-center justify-center'>
              <p className='text-xl'>{stockKeepingUnit}</p>
            </div>
            <p className='text-[0.8rem] pt-2'>Item</p>
          </div>}

          {/* <div className='w-full h-[150px] flex flex-col justify-start items-center border-r border-gray-200 p-2'> */}
          {miniFigures && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={minifiguresSvg} />
            </div>
            <div className='h-[50px] flex items-center justify-center'>
              <p className='text-xl'>{miniFigures}</p>
            </div>
            <p className='text-[0.8rem] pt-2'>Minifigures</p>
          </div>}

          {/* <div className='w-full h-[125px] flex flex-col justify-start items-center border-r border-gray-200 p-2'> */}
          {dimensions && <div className='flex items-center justify-start flex-col m-0 border-r b-[1px_solid_rgb(224,_224,_224)] max-w-[11.5rem] h-[125px] w-[16%] text-center'>
            <div className='w-10 h-10 flex items-center justify-center my-2'>
              <img src={dimensionSvg} />
            </div>
            {/* {Object.keys(dimensions).map((key, index) => { */}
            <div className='-mb-2 h-[50px]'>
              <p className='text-xs'>H: {dimensions['H']}cm</p>
              <p className='text-xs'>W: {dimensions["W"]}cm</p>
              <p className='text-xs'>D: {dimensions["D"]}cm</p>
            </div>
            {/* })} */}
            <p className='text-[0.8rem] pt-2'>Dimensions</p>
          </div>}

        </div>
      </section>

      <section className='p-4 flex flex-col w-[80%] justify-evenly items-center leading-10'>
        {description &&
          <Markdown>{description}</Markdown>
        }
      </section>

      <section className='flex flex-col w-[80%] justify-center items-center p-4 leading-8'>
        {specifications &&
          <Markdown>{specifications}</Markdown>
        }
      </section>
    </main>
  )
}

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const API_URL = import.meta.env.VITE_API_LOCAL_URL || "http://127.0.0.1:1337";

  const dataUrl = `${API_URL}/api/products/${pageContext.routeParams.id}?populate=deep,10`
  let response: Response
  try {
    response = await fetch(dataUrl)
  } catch (err) {
    throw RenderErrorPage({ pageContext: { pageProps: { errorDescription: `Couldn't fetch data ${dataUrl}` } } })
  }

  const product = (await response.json()) as IDataSingleProductResponse

  // console.log("before render", product);

  return {
    pageContext: {
      pageProps: {
        product
      },
      documentProps: {
        // The page's <title>
        product
      }
    }
  }
}
