import React from 'react';
import Header from "../Header/Header";

const Layout = props => {
    return (
        <>
            <Header />
            <main className="Main">
                <div className="container">
                    {props.children}
                </div>
            </main>
        </>
    );
};

export default Layout;