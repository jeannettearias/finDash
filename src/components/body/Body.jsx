
import Cards from './Cards';
import '../../styles/body/_body.scss';
import Categories from './Categories';
import Transactions from './Transactions';
import TransactionCharts from './TransactionCharts';
import Charts from './Charts';
import PropTypes from 'prop-types';

function Body({ cards, categories, wallets, transactions, charts }) {


    return (
        <>
            <Cards cards={cards}
                wallets={wallets} />

            <section className='down'>
                <article className='a__container'>
                    <Categories categories={categories}
                        transactions={transactions}
                    />
                    <Charts charts={charts}
                        categories={categories}
                        transactions={transactions}
                    />
                </article>
                <article className='b__container'>

                    <Transactions transactions={transactions} />
                    <TransactionCharts
                        transactions={transactions}
                        categories={categories}
                    />

                </article>
            </section>
        </>
    )
}

Body.propTypes = {
    cards: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    wallets: PropTypes.array.isRequired,
    transactions: PropTypes.array.isRequired,
    charts: PropTypes.array.isRequired
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