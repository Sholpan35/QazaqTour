import React, { useState } from 'react';
import useSearch from './useSearch';

function Shop() {
    const [items, setItems] = useState([
        { name: 'Waistcoat', brand: 'Zara' },
        { name: 'Cardigan', brand: 'Massimo Dutti' },
        { name: 'Sweater', brand: 'Shoqan' }
    ]);

    const { search, setSearch, filteredItems } = useSearch(items);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filteredItems.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.brand}</p>
                </div>
            ))}
        </div>
    );
}

export default Shop;
