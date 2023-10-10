import { Link } from "../Link";

interface Link {
    id: number;
    title: string;
    link: string;
    isExternal: boolean;
    type?: string;
}

const ButtonLink = (link: Link) => {

    return (
        <Link href={link?.link} className="flex justify-center items-center w-full">
            <button className={` ${link?.type === "PRIMARY" ? "bg-[#CF3BE6] hover:bg-[#B97EC9] " : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded-lg w-full h-16`}>
                <span className="text-base flex justify-center items-center">{link?.title}</span>
            </button>
        </Link>
    )
}

export default ButtonLink