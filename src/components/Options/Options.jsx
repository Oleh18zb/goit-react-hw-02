import { useState } from "react"
import s from "./Options.module.css"

const Options = ({updateFeedback}) => {

    return (
        <div className={s.btn}>
            <button className={s.button} onClick={() => updateFeedback("good")}>Good</button>
            <button className={s.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={s.button} onClick={() => updateFeedback("bad")}>Bad</button>
            <button className={s.button} onClick={() => updateFeedback("")}>Reset</button>
        </div>
    )
}

export default Options;