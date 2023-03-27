import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsName,
} from './Statistics.styled';

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <StatisticsList>
        {Object.entries(this.props.stat).map(([key, value]) => {
          return (
            <StatisticsItem key={shortid.generate()}>
              <StatisticsName key={shortid.generate()}>{key}: </StatisticsName>
              <span key={shortid.generate()}>{value}</span>
            </StatisticsItem>
          );
        })}
        <StatisticsItem key={shortid.generate()}>
          <span key={shortid.generate()}>Total: </span>
          <span key={shortid.generate()}>{this.props.total}</span>
        </StatisticsItem>
        <StatisticsItem key={shortid.generate()}>
          <span key={shortid.generate()}>Positive feedback: </span>
          <span key={shortid.generate()}>{this.props.positivePercentage}%</span>
        </StatisticsItem>
      </StatisticsList>
    );
  }
}

export default Statistics;
