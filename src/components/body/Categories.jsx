import PropTypes from "prop-types";
import '../../styles/body/_categories.scss';

function Categories({ categories }) {

    return (
        <>
            <div className='Card'>
                <div className='card__categories'>
                    <div className='card__header'>
                        <div className='a__title-container'>
                            <p className='a__title'>% current expenses</p>
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

            </div>
        </>
    );
}
Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
