import React, { useState, useMemo } from 'react';
import classes from './App.module.scss';
import Title from './components/Title/Title';

const App = () => {
  const [count, setCount] = useState<number>(1);
  const [userName, setUserName] = useState<string>('');
  // useMemoをもちいておらずパフォーマンスの最適化ができていない状態
  // const exponentiation = heavyExponentiationFunction(count);

  // useMemoを用いることでパフォーマンスの最適化ができている状態
  const exponentiation = useMemo(() => {
    return heavyExponentiationFunction(count);
  }, [count]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === '') {
      alert('ユーザー名を入力してください');
    } else {
      alert(`ユーザー名：${userName}`);
      setUserName('');
    }
  };
  return (
    <div className={classes.app}>
      <Title titleText={'#7 useMemo'} />
      <div className={classes.content}>
        <div className={classes.counter}>
          <button
            className={classes.incrementButton}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {count}
          </button>
          のべき乗は”{exponentiation}”
        </div>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={classes.label}>ユーザー名</label>
          <input
            className={classes.input}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button className={classes.submitButton} type='submit'>
            送信する
          </button>
        </form>
      </div>
    </div>
  );
};

const heavyExponentiationFunction = (count: number) => {
  let i = 0;
  while (i < 10000) {
    console.log(i);
    i++;
  }
  return count ** 2;
};

export default App;
