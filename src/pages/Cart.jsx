import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import Button from '../components/Button'
import CartItem from '../components/CartItem'
import Helmet from '../components/Helmet'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <Helmet title="Cart">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Number of products is ({totalProducts})
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Price :</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">

                        <Link to="/catalog">
                            <Button size="block">
                                Shopping Cart
                            </Button>
                        </Link>

                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
