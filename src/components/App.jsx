import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = event => {
    const clickTarget = event.target.textContent.toLowerCase();
    switch (clickTarget) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = Math.round((good / countTotalFeedback()) * 100);
    return percentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

// export class OldApp extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onButtonClick = event => {
//   const clickTarget = event.target.textContent.toLowerCase();
//   this.setState(prevState => {
//     return {
//       [clickTarget]: prevState[clickTarget] + 1,
//     };
//   });
// };

// countTotalFeedback() {
//   let total = 0;
//   for (const key in this.state) {
//     total = total + this.state[key];
//   }
//   return total;
// }

// countPositiveFeedbackPercentage() {
//   let total = 0;
//   for (const key in this.state) {
//     total = total + this.state[key];
//   }
//   let percentage = Math.round((this.state.good / total) * 100);
//   return percentage;
// }

//   render() {
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onButtonClick}
//           />
//         </Section>
//         <Section title="Statistic">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
