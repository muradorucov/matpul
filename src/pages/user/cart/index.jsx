import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countDecreamentAction, countIncreamentAction } from '../../../redux/actions/cartList.actions'

function Cart() {
    const { cartList } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <section id='cartpage'>
            <div class="container">
                <div className="row justify-content-center">
                    <div className="section-heading">
                        <h2>Shop Cart</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {
                            cartList.length ? <table class="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Count</th>
                                        <th>Qunatity Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartList.map(item => <tr>
                                            <td>
                                                <img src={item.images[0]} alt="" />
                                            </td>
                                            <td>{item.title.slice(0, 15)}...</td>
                                            <td>{item.price} AZN</td>
                                            <td>
                                                <button onClick={() => dispatch(countDecreamentAction(item))}>-</button>
                                                <input type="text" value={item.count} />
                                                <button onClick={() => dispatch(countIncreamentAction(item))}>+</button>
                                            </td>
                                            <td>{(item.price.split(".").join("").replace(",", ".") * item.count).toFixed(2)} AZN</td>
                                        </tr>)
                                    }

                                </tbody>
                            </table> : "Cart is Empty"
                        }



                        <h2>ToTal Price: {cartList.reduce((acc, item) => acc+ (item.price.split(".").join("").replace(",", ".") * item.count), 0).toFixed(2)} AZN</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart