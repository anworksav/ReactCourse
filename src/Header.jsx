import './index.css'

export default function Navbar() {
    return (
        <header>
            <nav className='logo-nav'>
                <img className="logo-img" src="src/assets/Globe.svg" alt="logo"/>
                <span className="logo-span">my travel journal.</span>
            </nav>
        </header>
    )
}