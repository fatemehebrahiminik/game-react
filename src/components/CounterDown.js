import { useState, useEffect } from "react"

export default function CounterDown(props) {
 
    let [counterDown, setCounterDown] = useState(props.defaultCounterDown);

    useEffect(() => {
        if (!counterDown) return;

        setTimeout(() => {
            setCounterDown(counterDown - 1);
        }, 1000);

    }, [counterDown]);

    return (
        <div>
            {counterDown}
        </div>
    )
}