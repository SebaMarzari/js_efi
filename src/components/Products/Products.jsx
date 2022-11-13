import { Card } from "antd"
import './Products.css'
import { dataProducts } from '../../data/products'
import { useNavigate } from "react-router-dom"
import LoginContext from "../../context/Login/LoginContext";
import { useContext } from "react";

const { Meta } = Card

const Products = () => {
    const navigate = useNavigate()
    const { isLogged } = useContext(LoginContext)

    const handleClick = (id) => {
        if (!isLogged) {
            navigate('/login')
        } else {
            navigate(`/product/${id}`)
        }
    }
    return (
        <div className="productsCardContainer">
            {
                dataProducts.map((product) => {
                    return (
                        <Card
                            hoverable
                            style={{ margin: '1rem' }}
                            cover={<img alt={product.description} src={product.image} />}
                            onClick={() => handleClick(product.id)}
                            key={product.id}
                        >
                            <Meta title={product.title} description={product.description} />
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Products