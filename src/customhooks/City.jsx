import React, { useEffect, useState } from 'react';
import useSearch from './useSearch';

function City() {
    const [items, setItems] = useState([ ]);
    const { search, setSearch, filteredItems } = useSearch(items);
    useEffect(() => {
        fetch('https://683ffb195b39a8039a5658ce.mockapi.io/flight')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.error('Error fetching cities:', err));
    }, []);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filteredItems.map((item, index) => (
                <div key={index}>
                    <p>{item.from}</p>
                    <p>{item.to}</p>
                    <p>{item.time}</p>
                    <p>{item.price}</p>
                    <p>{item.airline}</p>
                    <p>{item.seats}</p>
                    <p>{item.id}</p>
                </div>
            ))}
        </div>
    );
}

export default City;