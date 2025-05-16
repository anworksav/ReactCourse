import './index.css'
import headerImg from './assets/chef-claude-icon.png'

export default function Header() {
    return (
        <header>
            <nav className='header-nav'>
                <img src={headerImg} alt="logo" className='logo-img'/>
                <p className='logo-name'>Chef Claude</p>
            </nav>
        </header>
    )
}