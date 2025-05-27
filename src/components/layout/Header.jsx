import '../../styles/layout/_header.scss';

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
            </header>
        </>
    )
}

export default Header;

