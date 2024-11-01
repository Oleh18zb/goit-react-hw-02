import { useState } from "react";
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import "./index.css"
import feedback from './components/Feedback/feedback.json'

const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback
       good={feedback.good} 
       neutral={feedback.neutral}
       bad={feedback.bad}
       />
    </div>
  )
}

export default App
