interface ImageProps { 
    name: string, 
    alt: string, 
    url: string, 
    style: string 
}

function Image(props: ImageProps) {
    
    const { name, alt, url, style } = props

    return <img src={url} className={style} id={name} alt={alt} />

}

export default Image