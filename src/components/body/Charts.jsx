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

    const selectedCategoryObj = categories.find(cat => cat.id === selectedCategory);

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
                            <div className='chart__label'>
                                {selectedCategoryObj}
                            </div>
                        </div>
                        <div className="items__container">
                            <ul className="chart__list">
                                {transactions.map((transaction, idx) => (
                                    <li className="item__label"
                                        key={transaction.id || `tx-${transaction.category_name}-${idx}`}
                                    >
                                        <span className="text__label">{transaction.spend_type}</span>
                                        <span className="text__label">
                                            {transaction.value}
                                            {transaction.currency}
                                        </span>
                                    </li>

                                ))}

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="select__container">
                    <label className="select__label">Select another category</label>
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
        </div>
    );
}

Charts.propTypes = {
    categories: PropTypes.array.isRequired,
    transactions: PropTypes.array.isRequired
};

export default Charts;