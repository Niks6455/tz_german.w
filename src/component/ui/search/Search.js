import React, {useState} from "react"
import styles from "./Search.module.scss"
import search from "./../../img/icon/search.svg"

export default function Search(props) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        props.onSearch(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit} className={styles.search__container}>
        <label>
            <input type="text" placeholder="Найти магазин"  value={searchTerm} onChange={handleInputChange}/>
        </label>
            <button className={styles.search__icon}  type="submit">
                <img src={search} alt="лупа"></img>
            </button>
        </form>
    )
    

}