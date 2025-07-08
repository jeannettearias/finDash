import '../../styles/body/_cards.scss';
import PropTypes from 'prop-types';

function Cards({ cards }) {
    //define cards data

    return (
        <>
            <article className='person-cards'>
                <div className='content-card'>
                    <div className='content-icon'>
                    </div>
                    <div className='content-button'>
                        {cards.map((card, index) => (
                            <div className="title-content" key={index}>
                                <ul className='card-user'>
                                    <li key={card.id} className="content-list">
                                        <h4 className="text1-content">Hola, {card.user.name}!</h4>
                                        <span className="text2-content">{card.user.role}</span>
                                        <span className="text3-content">{card.user.date}</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
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
            </article>
        </>
    )
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Cards;

