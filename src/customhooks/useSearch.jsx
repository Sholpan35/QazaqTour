import { useState } from 'react';

function useSearch(items) {
    const [search, setSearch] = useState('');

    const filteredItems = items.filter(item =>
        item.from.toLowerCase().includes(search.toLowerCase())||
        item.to.toLowerCase().includes(search.toLowerCase())
    );

    return { search, setSearch, filteredItems };
}
export default useSearch