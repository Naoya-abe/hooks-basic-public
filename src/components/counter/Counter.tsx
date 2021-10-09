import React from 'react';
import classes from './Counter.module.scss';

type Props = {
  counterTitle: string;
  count: number;
};

const Counter: React.VFC<Props> = React.memo(({ counterTitle, count }) => {
  console.log(`Counter:${counterTitle}`);

  return (
    <div className={classes.root}>
      {counterTitle}:<span className={classes.count}>{count}人</span>
    </div>
  );
});

export default Counter;
