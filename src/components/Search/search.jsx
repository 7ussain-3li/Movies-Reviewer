import "./search.css"

const SearchBox = () => {
    return (
        <div className="search">
            <input placeholder="Search for a movie, tv show, actor ......"/>
            <button>Search</button>
        </div>
    );
};

export default SearchBox;