import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from "../context"
import ContactForm from './ContactForm';
// import Calander from './Calander';

class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="courses" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div><br/>
                        <div>
                        <b style={{color: "#ff0000"}}>Please Fill in the Registration Form for Booking Appointments, We will send you the conformation</b>
                        <ContactForm/>
                        <br/>

                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default ProductList
