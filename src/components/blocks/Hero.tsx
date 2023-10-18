import PageNotFound from "../../errors/PageNotFound";
import ButtonLink from "../elements/ButtonLink";
import Image from "../Image";
import { HeroBlock } from "../types";

const Hero = (props: HeroBlock) => {

    if (props) {

        const { heading, text, link, image } = props;

        const imageUrl = image?.data?.attributes?.url || '';
        const imageName = image?.data?.attributes?.name || '';
        const alternativeText = image?.data?.attributes?.alternativeText || '';

        const imageProps = {
            url:[import.meta.env.VITE_API_URL, imageUrl].join(''), name:imageName, alt:alternativeText, style:"w-full h-full rounded-xl"
        }

        return (
            <main className="flex flex-col w-full justify-center items-center h-3/4">
                <section className="flex h-full w-full max-lg:flex-col max-lg:justify-center max-lg:items-center">
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        {heading && <h1 className="font-bold text-4xl text-center">{heading}</h1>}
                        {text && <p className="text-base p-4 text-gray-500 text-center">{text}</p>}
                        <div className="p-4">
                            {link && (
                                <ButtonLink {...link}/>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full max-lg:hidden">
                        {image && (
                            <Image {...imageProps} />
                        )}
                    </div>
                </section>
            </main>
        );


    } else {
        const data = {
            title: "Hero Component",
            text: "This component it's not mounting correctly"
        }
        return <PageNotFound {...data} />
    }
}

export default Hero