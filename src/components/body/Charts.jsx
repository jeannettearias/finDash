import React, { useState } from 'react';
import '../../styles/body/_charts.scss';
import PropTypes from 'prop-types';

function Charts({ categories, transactions }) {
    const [selectedCategory, setSelectedCategory] = useState(
        categories.length > 0 ? categories[0].id : ''
    );

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className='Card-chart'>
            <header className='card_chart__header'>
                <h3 className='card__title'>Expenses by Category</h3>
            </header>
            <div className='card__footer'>
                <div className="progress__bar__container" alt="">
                    <div className="progress__bar">
                        <div className="progress__bar__fill"></div>
                    </div>
                    <div className="progress__bar__number">
                        <p className="min_amount_info">100€</p>
                        <p className="max_amount_info">500€</p>
                    </div>
                </div>
                <div className="chart__content">
                    <div className="chart__content__money">
                        <div className="chart__donut">
                            <div className='chart__label' htmlFor="">{transactions.map((transaction, idx) =>
                                <label className="chart__label_content"
                                    key={transaction.id || `${transaction.category_name}-${idx}`}>
                                    {transaction.category_name}
                                    <span className="chart__label__value">
                                        {transaction.value}{transaction.currency}
                                    </span>
                                </label>

                            )}</div>
                        </div>
                        <div className="items__container">
                            <ul className="chart__items">
                                {transactions.map(transaction => (
                                    <li className="transaction__item"
                                        key={transaction.id} >
                                        <div className="item__labels">
                                            <label className="chart__item__label">{transaction.spend_type}</label>
                                            <label className="chart__item__value">{transaction.value}{transaction.currency}</label>
                                        </div>
                                    </li>
                                ))}</ul>
                        </div>
                    </div>
                </div>
                <div className="label__category__container">
                    <label className="label__category">Select another category</label>
                    <div className="dropdown__container">
                        <select className="category__dropdown"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            name="category" id="category">{categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}</select>
                    </div>
                </div>
            </div >
        </div >
    );
}
Charts.propTypes = {
    categories: PropTypes.array.isRequired,
    transactions: PropTypes.array.isRequired
};

export default Charts;