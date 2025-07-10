
import Cards from './Cards';
import '../../styles/body/_body.scss';
import Categories from './Categories';
import PropTypes from 'prop-types';

function Body({ cards, categories, wallets }) {


    return (
        <>
            <section className='person-cards'>
                <Cards cards={cards}
                    wallets={wallets}
                />
            </section>

            <section className='categories'>
                <Categories categories={categories} />
            </section>

            <section className='down'>
                <article className='a__container'>

                </article>
                <article className='b__container'>
                    <div className='Card/Time-line/Desk'></div>
                    <div className='Dropdown/Datatable'></div>
                    <div className='Card__Products'></div>
                </article>
            </section>
        </>
    )
}

Body.propTypes = {
    cards: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    wallets: PropTypes.array.isRequired
};

export default Body;

/*
Dashboard
    body
        person/cards
            Card/User
                content/icon
                    button/icon
                    content/button
            Card/Current-money
            Card/Money 
            Card/Money
        down
        top-bar


*/