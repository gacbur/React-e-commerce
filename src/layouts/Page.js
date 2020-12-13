import React, { Switch, Route } from 'react-router-dom'

import Products from '../page/Products'
import Cart from '../page/Cart'
import AdminPanel from '../page/AdminPanel'
import Error from '../components/Error'
import SingleProduct from '../components/SingleProduct'

const Page = () => {
    return (
        <main>
            <div className="main-content">
                <Switch>
                    <Route path="/products" exact component={Products}></Route>
                    <Route path="/products/:SingleProduct" exact component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/admin_panel" component={AdminPanel}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </div>
        </main >
    );
};

export default Page;
