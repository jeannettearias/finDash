import '../../styles/layout/_header.scss';

function Header() {
    return (
        <>
            <div className='header'>

                <div className='datetime__container'>
                    <p className='datetime__title'>Dashboard</p>
                    <div className='input__datepicker'>
                        <input className='datetime__input'
                            type="text"
                            name="date"
                            id="date"
                            placeholder='May 2025'
                        ></input>
                        <img className='calendar__icon'
                            src="/images/calendar.svg" alt="" />
                    </div>
                </div>
                <div className='search__container'>
                    <input className='inputSearch'
                        type="text" placeholder='Search' />
                    <img
                        className='search__icon'
                        src="/images/basil_search-outline.svg" alt="" />
                </div>
            </div>
        </>
    )
}
export default Header;

