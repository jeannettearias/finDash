
import '../../styles/layout/_sideBar.scss';

function SideBar() {
    return (
        <>
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
        </>
    )
}
export default SideBar;