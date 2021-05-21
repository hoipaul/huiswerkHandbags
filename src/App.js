import React from 'react';
import './App.css';
import Button from './Button';
import Product from "./Product";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    title="to the collection"
                    type="button"
                    onClick={() => console.log()}/>
                <Button
                    title="shop all the bags"
                    type="button"
                    onClick={() => console.log()}/>
                <Button
                    title="pre-orders"
                    type="button"
                    onClick={() => console.log()}/>
            </nav>
            <main>
                <article>
                    <Product
                        label={"Best seller"}
                        image={bag1}
                        name="The handy bag"
                        price={"€400,-"}
                    />
                </article>
                <article>
                    <Product
                        label={"Best seller"}
                        image={bag2}
                        name="The stylish bag"
                        price={"€250,-"}
                    />
                </article>
                <article>
                    <Product
                        label={"New collection"}
                        image={bag3}
                        name="The simple bag"
                        price={"€300,-"}
                    />
                </article>
                <article>
                    <Product
                        label={"New collection"}
                        image={bag4}
                        name="The trendy bag"
                        price={"€150,-"}
                    />
                </article>
            </main>
        </>
    );
}

export default App;



