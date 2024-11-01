import s from "./Feedback.module.css"

const Feedback = ({good, neutral, bad}) => {
    return (
        <div className={s.feedback}>
            <ul className={s.list}>
                <li className={s.item}>
                    <p className={s.text}>Good: {good}</p>
                </li>
                <li className={s.item}>
                    <p className={s.text}>Neutral: {neutral}</p>
                </li>
                <li className={s.item}>
                    <p className={s.text}>Bad: {bad}</p>
                </li>
                <li className={s.item}>
                    <p className={s.text}>Total</p>
                </li>
                <li className={s.item}>
                    <p className={s.text}>Positive</p>
                </li>
            </ul>
        </div>
    )
}

export default Feedback;