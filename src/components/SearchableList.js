import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const lastChange = useRef();
    const [searchItem, setSearchItem] = useState("");

    const searchResults = items.filter((item) => 
        JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
    );

    function handleChange(event) {
        if(lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchItem(event.target.value);
        }, 500);

    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}