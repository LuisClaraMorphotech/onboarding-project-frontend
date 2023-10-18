import { useState } from 'react';

interface Format {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface Attributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
        thumbnail?: Format;
        small?: Format;
        medium?: Format;
        // Add more formats as needed
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
}

interface ImageData {
    id: number;
    attributes: Attributes;
}

interface ImageResponse {
    data: ImageData[];
}

const ImageCarousel = ({ images }: { images: ImageResponse }) => {

    const API_URL = import.meta.env.VITE_API_LOCAL_URL || "http://127.0.0.1:1337";

    const [selectedImage, setSelectedImage] = useState(images?.data[0]?.attributes?.formats?.thumbnail?.url);

    const handlePreviewClick = (url: string | undefined) => {
        setSelectedImage(url);
    };
    // src={`${API_URL}${image.attributes.formats.thumbnail.url}`}
    return (

        <div className="flex h-[400px] border border-gray-20">
            {/* Preview Section */}
            <div className="w-1/4 p-2 h-full flex flex-col justify-center items-center overflow-y-auto border-r bg-gray-100">
                {images.data.map(image => (
                    <img
                        data-testid="thumbnail-image"
                        key={image.id}
                        src={`${API_URL}${image?.attributes?.formats?.thumbnail?.url}`}
                        alt={image.attributes.name}
                        className={`w-[90%] h-[90%] max-w-auto mx-h-auto cursor-pointer mb-2 p-2 ${selectedImage === image?.attributes?.formats?.thumbnail?.url ? 'border border-gray-500 p-1/2' : ''}`}
                        onClick={() => handlePreviewClick(image?.attributes?.formats?.thumbnail?.url)}
                    />
                ))}
            </div>

            {/* Selected Image */}
            <div className="flex justify-center items-center w-full h-full p-1">
                <img src={`${API_URL}${selectedImage}`} alt={selectedImage} className='w-auto h-auto' />
            </div>
        </div>
    );
};

export default ImageCarousel;
