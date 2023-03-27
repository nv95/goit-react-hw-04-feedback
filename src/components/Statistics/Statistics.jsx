import {
  StatisticsList,
  StatisticsItem,
  StatisticsName,
} from './Statistics.styled';
import { nanoid } from 'nanoid';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem key={nanoid()}>
        Good: <StatisticsName>{good}</StatisticsName>
      </StatisticsItem>
      <StatisticsItem key={nanoid()}>
        Neutral: <StatisticsName>{neutral}</StatisticsName>
      </StatisticsItem>
      <StatisticsItem key={nanoid()}>
        Bad: <StatisticsName>{bad}</StatisticsName>
      </StatisticsItem>
      <StatisticsItem key={nanoid()}>
        Total: <StatisticsName>{total()}</StatisticsName>
      </StatisticsItem>
      <StatisticsItem key={nanoid()}>
        Positive feedback:{' '}
        <StatisticsName>{positivePercentage()}</StatisticsName>%
      </StatisticsItem>
    </StatisticsList>
  );
};
