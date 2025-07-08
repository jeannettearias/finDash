import PropTypes from "prop-types";
import '../../styles/body/_categories.scss';

function Categories({ categories }) {

    return (
        <>
            <div className='card__chart'>
                <div className='card__categories'>
                    <div className='a__header'>
                        <div className='a__title-container'>
                            <p className='a__title'>% current expenses</p>
                        </div>
                    </div>
                    <div className='card__content'>
                        <div className='categories__container'>
                            <div className='categories__chart'></div>
                            <ul className='categories__legend'>
                                {categories.map(category => (
                                    <li key={category.id}>
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
        </>
    );
}
Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
