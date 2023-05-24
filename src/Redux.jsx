import { useDispatch, useSelector } from "react-redux";

import Deleted from "./Deleted";

function Redux() {

    const dispatch = useDispatch()

    const obj = useSelector(state => state)

    function handlerChange(){
        dispatch({
            type: 'change'
        })
    }



    return (
        <>
        <div className="App">
            Значение стейта: {obj}
        </div>
        <div>
            <button onClick={handlerChange}>click</button>
        </div>
        <Deleted/>
        </>
    );
}

export default Redux