import '../../styles/body/_cards.scss';

function Cards() {
    return (
        <>
            <div className='person-cards'>
                <div className='card-user'>
                    <div className='content-card'>
                        <div className='content-icon'>
                        </div>
                        <div className='content-button'>
                            <div className='title-content'>
                                <h4 className='text1-content'>Hola, Antonia!</h4>
                                <p className='text2-content'>UX/UI Designer</p>
                                <p className='text3-content'>Sábado 07 de Abril del 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-current-money'>

                </div>
                <div className='card-money1'>
                    <div className='content-card-money'>
                        <p className='card-text1'>Monthly incomes</p>
                        <p className='card-text2'>1500€</p>
                    </div>
                    <p className='card-text3'>+4% previous 28 days</p>
                    <img
                        className='card-graphic'
                        src="./images/card-user/card-money/person/Card/graphic.svg" alt="" />
                </div>
                <div className='card-money2'>
                    <div className='content-card-money'>
                        <p className='card2-text1'>Monthly spendings</p>
                        <p className='card2-text2'>-350€</p>
                    </div>
                    <p className='card2-text3'>-25% previous 07 days</p>
                    <img
                        className='card-graphic'
                        src="./images/card-user/card-money/spents/person/Card/graphic.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Cards;
