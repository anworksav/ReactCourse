import Header from './Header'
import Entry from './Entry'
import data from './data'

export default function App() {
    //console.log(data)
    const arr = data.map((element) => {
        return <Entry 
                    key={element.id}
                    entry={element}
                    // img={{
                    //     src:element.img.src,
                    //     alt:element.img.alt
                    // }}
                    // title={element.title}
                    // country={element.country}
                    // googleMapsLink={element.googleMapsLink}
                    // dates={element.dates}
                    // text={element.text}
                />
    })
    console.log(arr)
    return (
        <>
            <Header />
            <main>{arr}</main>
        </>
    )
}
