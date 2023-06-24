import { Component } from 'react';
import DivFeedbackCounter from './FeedbackCounter.styled';
// import
class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = evt => {
    const {
      target: { textContent },
    } = evt;
    this.setState(prevState => ({ [textContent]: prevState[textContent] + 1 }));

    // switch (textContent) {
    //   case 'good':
    //     this.setState(prevState => ({ good: prevState.good + 1 }));
    //     return;
    //   case 'neutral':
    //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    //     return;
    //   default:
    //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
    //     return;
    // }
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
      <DivFeedbackCounter>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleAddFeedback}>
          good
        </button>
        <button type="button" onClick={this.handleAddFeedback}>
          neutral
        </button>
        <button type="button" onClick={this.handleAddFeedback}>
          bad
        </button>
        <h2>Statistic</h2>
        <ul>
          <li>good: {this.state.good}</li>
          <li>neutral: {this.state.neutral}</li>
          <li>bad: {this.state.bad}</li>
          <li>total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </DivFeedbackCounter>
    );
  }
}

export default FeedbackCounter;
