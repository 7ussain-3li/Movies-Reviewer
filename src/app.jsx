import { useEffect, useState } from "react";

const App = () => {
    // const [arr, setArr ] = useState ([]);
    // const [loading, setLoading] = useState(false)
    
    // const loadData = async () => {
    //     console.log("loading..");
    //     setLoading(true);
    //     try {
    //         let resp = await fetch("")
    //         let jsonData = await resp.json();
    //         console.log(jsonData)
    //         setArr(jsonData)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // useEffect(() => {
    //     loadData();
    // }, []);
    return (
        <div>
            {/* <h1>Hi Everyone</h1>
            <ul>
                {loading && <p>Loading...</p>}
                {arr.map((el) => <li>{el.results}</li>)}
            </ul> */}

            <h1>Hello</h1>
        </div>
    )
}

export default App;