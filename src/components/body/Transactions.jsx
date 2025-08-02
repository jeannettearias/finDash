import '../../styles/body/_transactions.scss';
import PropTypes from 'prop-types';

function Transactions({ transactions }) {

    return (
        <>
            <section className='expenses__card-time'>

            </section>
            <section className='expenses___list'></section>
            <section className='expenses__config'></section>

        </>
    );
}

Transactions.propTypes = {
    transactions: PropTypes.array.isRequired
};


export default Transactions;
