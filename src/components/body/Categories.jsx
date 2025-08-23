import PropTypes from "prop-types";
import '../../styles/body/_categories.scss';

function Categories({ categories }) {

    return (
        <>
            <div className='Card'>
                <div className='card__categories'>
                    <header className='card__header'>
                        <div className='a__title-container'>
                            <h3 className='a__title'>% current expenses</h3>
                        </div>
                    </header>
                    <div className='card__content'>
                        <div>
                            <div className="persons">
                                <div className='categories__chart'></div>
                                <ul className='categories__legend'>
                                    {categories.map(category => (
                                        <li id={category.id} key={category.id}>
                                            <span className='category__label'></span>
                                            {category.name}
                                        </li>
                                    ))}
                                </ul>
                                <div className='categories__button__container'>
                                    <button className='categories__btn'>Add categories</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                            <div className="chart__donut"></div>
                            <div className="chart__items"></div>
                        </div>
                    </div>
                    <div className="label__category__container">
                        <label className="label__category">Select another category</label>
                        <div className="dropdown__container">
                            <select className="category__dropdown"
                                name="category" id="category">{categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}</select>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
