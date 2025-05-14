import './index.css'

export default function Entry(props) {
    return (
        <article className='article'>
            <img className='img-photo' src={props.img.src} alt={props.img.alt}/>
            <div className='article-info'>
                <img className='img-location' src='src/assets/location.png' alt='location'/>
                <span className='span-location'>{props.country}</span>
                <a className='a-location' href={props.googleMapsLink}>View on Google Maps</a>
                <h1 className='article-name'>{props.title}</h1>
                <h2 className='article-dates'>{props.dates}</h2>
                <p className='article-text'>{props.text}</p>
            </div>
        </article>
    )
}