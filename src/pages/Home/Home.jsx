import { Carousel } from 'antd'
import './Home.css'
import { dataProducts } from '../../data/products';
import Products from '../../components/Products/Products'
import LoginContext from "../../context/Login/LoginContext";
import { useContext } from 'react';

const contentStyle = {
    height: '100%',
    background: 'rgb(180 207 207)',
    margin: '7rem 0rem',
};

const Home = () => {
    const { user } = useContext(LoginContext);
    return (
        <div className='homeContainer'>
            <h1 className='titleStyle'>
                Bienvenido {user}
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
                <h2 className='descriptionStyle'>3 CUOTAS SIN INTERES</h2>
                <h2 className='descriptionStyle'>ENVÍOS A TODO EL PAÍS</h2>
            </div>
            <div className='productsContainer'>
                <Products />
            </div>
        </div>
    )
}

export default Home