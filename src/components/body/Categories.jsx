import PropTypes from "prop-types";
import '../../styles/body/_categories.scss';

function Categories({ categories }) {

    return (

        <div className='Card'>
            <div className='card__categories'>
                <header className='card__header'>
                    <div className='a__title-container'>
                        <h3 className='a__title'>% current expenses</h3>
                    </div>
                </header>
                <div className='card__content'>
                    <div >
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

    );
}
Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    transactions: PropTypes.array.isRequired
};

export default Categories;
