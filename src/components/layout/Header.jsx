import '../../styles/layout/Header.scss';

function Header() {
    return (
        <>
            <header className="header">
                <section className='top-bar'>
                    <div
                        className='datetime__container'
                    >
                        <input
                            className='datetime__input'
                            type="text"
                            name="date"
                            id="date"
                            placeholder='May 2025'
                        ></input>
                        <img
                            className='calendar__icon'
                            src="/images/calendar.svg" alt="" />

                    </div >
                    <div className='search__container'>
                        <input className='inputSearch'
                            type="text" placeholder='search' />
                        <img
                            className='search__icon'
                            src="/images/basil_search-outline.svg" alt="" />
                    </div>
                </section>
                <section className='side-bar'>
                    <div className='logo__container'>
                        <img
                            className='logo__side__bar'
                            src="/images/Logo-temp.svg" alt="" />
                        <h1
                            className='logo__title'
                        >Dashboard</h1>
                    </div>
                    <div>
                        <h2 className='menu__title'>Menu</h2>
                        <ul>
                            <li>Dashboard</li>
                            <li>Notifications</li>
                            <li>Wallets</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Support</h2>
                        <ul>
                            <li>Settings</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;

