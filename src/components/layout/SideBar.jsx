
import '../../styles/layout/_sideBar.scss';

function SideBar() {
    return (
        <>
            <div className='logo__container'>
                <img className='logo__side__bar'
                    src="./images/Logo-temp.svg" alt="" />
                <h1 className='logo__title'>FinDash</h1>
            </div>

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
        </>
    )
}
export default SideBar;