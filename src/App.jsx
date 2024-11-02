import { useState, useEffect } from "react";
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import "./index.css"
import feedback from './components/Feedback/feedback.json'
import Notification from './components/Notification/Notification'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} handleReset={handleReset} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
        good={feedback.good} 
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet"/>
      )}
    </div>
  )
}

export default App
