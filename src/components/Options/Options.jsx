import { useState } from "react"
import s from "./Options.module.css"

const Options = ({updateFeedback, handleReset, totalFeedback}) => {

    return (
        <div className={s.btn}>
            <button className={s.button} onClick={() => updateFeedback("good")}>Good</button>
            <button className={s.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={s.button} onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button className={s.button} onClick={handleReset}>Reset</button>
            )}
        </div>
    )
}

export default Options;