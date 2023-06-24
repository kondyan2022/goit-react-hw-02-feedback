import { Component } from 'react';
import FeedbackCounter from './FeedbackCounter/FeedbackCounter';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddFeedback = evt => {
    const {
      target: { textContent },
    } = evt;
    this.setState(prevState => ({
      [textContent]: prevState[textContent] + 1,
    }));
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, a) => acc + a, 0);
  }
  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good * 100) / (this.countTotalFeedback() || 1)
    );
  }

  render() {
    return (
      <>
        <Notification message="Before refactoring" />
        <FeedbackCounter />
        <Notification message="After refactoring" />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistic">
            <Statistic
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}
