import './index.css'

export default function Entry(props) {
    console.log(props)
    return (
        <article className='article'>
            <img className='img-photo' src={props.entry.img.src} alt={props.entry.img.alt}/>
            <div className='article-info'>
                <img className='img-location' src='src/assets/location.png' alt='location'/>
                <span className='span-location'>{props.entry.country}</span>
                <a className='a-location' href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h1 className='article-name'>{props.entry.title}</h1>
                <h2 className='article-dates'>{props.entry.dates}</h2>
                <p className='article-text'>{props.entry.text}</p>
            </div>
        </article>
    )
}