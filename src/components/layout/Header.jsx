import '../../styles/layout/Header.scss';

function Header() {
    return (
        <>
            <header className="header">
                <section className='top-bar'>
                    <div className='logo'>
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
                            src="/public/images/calendar.svg" alt="" />

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

