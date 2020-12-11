import React, { Switch, Route } from 'react-router-dom'

import Products from '../page/Products'
import Cart from '../page/Cart'
import AdminPanel from '../page/AdminPanel'

const Page = () => {
    return (
        <main>
            <div className="main-content">
                <Switch>
                    <Route path="/" exact component={Products}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/admin_panel" component={AdminPanel}></Route>
                </Switch>
            </div>
        </main >
    );
};

export default Page;
