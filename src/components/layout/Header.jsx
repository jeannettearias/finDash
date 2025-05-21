import '../../styles/layout/Header.scss';

function Header() {
    return (
        <>
            <header className="header">
                <section className='top-bar'>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                    <div>
                        <time datetime="2023-10-01T12:00:00Z">12:00 PM</time>
                    </div>
                </section>
                <section className='side-bar'>
                    <h2>Menu</h2>
                    <ul>
                        <li>Dashboard</li>
                        <li>Notifications</li>
                        <li>Wallets</li>
                    </ul>

                    <h2>Support</h2>
                    <ul>
                        <li>Settings</li>
                        <li>Help</li>
                    </ul>
                </section>
            </header>
        </>
    )
}

export default Header;

