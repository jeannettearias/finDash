import '../../styles/body/_cards.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Cards({ cards, wallets }) {
    //define cards data
    const activeCards = cards.filter(card => card.active);
    console.log(activeCards);


    return (
        <>
            <article className="person-cards">
                <div className="card-user">
                    {activeCards.map((card) => (
                        <div className="card-id" key={card.id}>
                            <ul className="card-user-content">
                                <li className="content-icon">
                                    <img className='content-icon-image' src={card.user.image} alt={card.user.name} />
                                    <span className="content-icon">{card.user.initials}</span>
                                </li>
                                <li className='content-button'>
                                    <div className="title-content">
                                        <h4 className='text1-content'>Hola, {card.user.name}!</h4>
                                        <span className="text2-content">{card.user.role}</span>
                                        <span className="text3-content">{card.user.last_transaction}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </article>

            <article>
                {wallets.map((item) => (
                    <div
                        key={item.id}
                        className={item.type === 'incomes' ? 'card-money1' : 'card-money2'}
                    >
                        <div className="content-card-money">
                            <p className={item.type === 'incomes' ? 'card-text1' : 'card2-text1'}>
                                {item.title}
                            </p>
                            <p className={item.type === 'incomes' ? 'card-text2' : 'card2-text2'}>
                                {item.amount}
                            </p>
                        </div>
                        <p className={item.type === 'incomes' ? 'card-text3' : 'card2-text3'}>
                            {item.comparison}
                        </p>
                        <img
                            className="card-graphic"
                            src={item.image}
                            alt=""
                        />
                    </div>
                ))}
            </article >
        </>
    )
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    wallets: PropTypes.array.isRequired
};

export default Cards;

