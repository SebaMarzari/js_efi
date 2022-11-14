import { Carousel } from 'antd'
import './Home.css'
import { dataProducts } from '../../data/products';
import Products from '../../components/Products/Products'
import LoginContext from "../../context/Login/LoginContext";
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const contentStyle = {
    height: '100%',
    background: 'rgb(180 207 207)',
    margin: '7rem 0rem',
};

const Home = () => {
    const { user } = useContext(LoginContext);
    const { t } = useTranslation();
    return (
        <div className='homeContainer'>
            <h1 className='titleStyle'>
                {`${t('welcome')} ${user ? user : ''}`}
            </h1>
            <Carousel autoplay className='carouselStyle' style={contentStyle}>
                {
                    dataProducts.map((product) => {
                        return (
                            <div className='imgContainer' key={product.id}>
                                <img src={product.image} alt={product.description} />
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className='infoStyle'>
                <h2 className='descriptionStyle'>{t("interest")}</h2>
                <h2 className='descriptionStyle'>{t("shipping")}</h2>
            </div>
            <div className='productsContainer'>
                <Products />
            </div>
        </div>
    )
}

export default Home