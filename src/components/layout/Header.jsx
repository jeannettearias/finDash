import '../../styles/layout/Header.scss';

function Header() {
    return (
        <>
            <header className='header'>
                <section className='top-bar'>
                    <div className='logo__container'>
                        <img
                            className='logo__side__bar'
                            src="/images/Logo-temp.svg" alt="" />
                        <h1
                            className='logo__title'
                        >Dashboard</h1>
                    </div>
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

                    <div className='menu-support__container'>
                        <div className='menu__container'>
                            <h2 className='menu__title'>Menu</h2>
                            <ul className='menu__items'>
                                <li className='selected__item menu__item'>Dashboard</li>
                                <li className='menu__item'>Notifications</li>
                                <li className='menu__item'>Wallets</li>
                            </ul>
                        </div>
                        <div className='support__container'>
                            <h2 className='support__title'>Support</h2>
                            <ul className='support__items'>
                                <li className='support__item'>Settings</li>
                                <li className='support__item'>Help</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;

