import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from "../spiner";

function ItemList ({getData, onCharSelected, renderItem}) {
    const [itemList, updateList] = useState([])

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
     }, [])


    function renderItems(arr){
        return arr.map((item, id) => {
            const label = renderItem(item)
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onCharSelected(id)}
                >
                    {label}
                </li>
            )
        })
    }

    if(!itemList){
        return <Spinner/>
    }

    const items = renderItems(itemList)
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

}
export default ItemList;
