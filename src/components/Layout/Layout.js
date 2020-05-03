import React from 'react';
import Aux from '../../hoc/auxMain';
import myStyle from './Layout.module.css';



const layout = (props) => (
    <Aux>
    <div>
        Toolbar, SideDrawer, Backdrop
    </div>
    <main className={myStyle.ContentX}>
        {props.children}
    </main>
    </Aux>
);

export default layout;