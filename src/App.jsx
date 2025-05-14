import Header from './Header'
import Entry from './Entry'
import data from './data'

export default function App() {
    //console.log(data)
    const arr = data.map((element) => {
        return <Entry 
                    key={element.id}
                    {...element}
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
