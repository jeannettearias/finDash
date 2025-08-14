import PropTypes from "prop-types";
import '../../styles/body/_categories.scss';

function Categories({ categories }) {

    return (
        <>
            <div className='Card'>
                <div className='card__categories'>
                    <div className='card__header'>
                        <div className='a__title-container'>
                            <h3 className='a__title'>% current expenses</h3>
                        </div>
                    </div>
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
                <div>
                    <header className='card__header'>
                        <h3 className='card__title'>Expenses by Category</h3>
                    </header>
                    <div className='card__footer'>
                        <div className="card__progress__bar" alt="">
                            <div className="progress__bar"></div>
                            <div className="card__number"></div>
                        </div>


                        <div className="card__content">
                            <div className="card__content__money">
                                <div className="card__content__donut"></div>
                                <div className="card__content__items"></div>
                            </div>
                        </div>
                        <div >
                            <label htmlFor="">Select another category</label>
                            <select className="card__select"
                                name="category" id="category"></select>
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
