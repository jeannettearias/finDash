
import Cards from './Cards';
import '../../styles/body/_body.scss';

function Body() {
    return (
        <>
            <section className='cards'>
                <Cards />
            </section>

            <section className='down'>
                <article className='a__container'>
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
                                        <li><span className='category__label'></span> Category 1</li>
                                        <li><span className='category__label'></span> Category 2</li>
                                        <li><span className='category__label'></span> Category 3</li>
                                    </ul>
                                    <div className='categories__button__container'>
                                        <button className='categories__btn'>Add categories</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className='b__container'>
                    <div className='Card/Time-line/Desk'></div>
                    <div className='Dropdown/Datatable'></div>
                    <div className='Card__Products'></div>
                </article>
            </section>
        </>
    )
}

export default Body;