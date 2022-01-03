import React, { useState } from 'react';
import classes from './App.module.scss';
import Title from './components/Title/Title';
import { useAutoResize } from './hooks';

const App = () => {
  // 画面に表示するitem一覧の値を管理
  const [itemList, setItemList] = useState<string[]>([]);
  // textareaに入力された値を管理
  const [value, setValue] = useState<string>('');

  // 「送信する」ボタンを押したときに発火する関数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemList([...itemList, value]);
    setValue('');
  };

  // textareaヘ文字列が入力されたときに発火する関数
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  // textarea要素の高さを動的に調整するためのカスタムフック
  const textareaRef = useAutoResize(value);

  return (
    <div className={classes.app}>
      <Title titleText={'#8 useRef'} />
      <div className={classes.content}>
        <div className={classes.itemList}>
          {itemList.length === 0 ? (
            <h3>No Items</h3>
          ) : (
            <ul className={classes.ul}>
              {itemList.map((item) => {
                return (
                  <li className={classes.li} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <textarea
            value={value}
            onChange={(e) => {
              handleChange(e);
            }}
            // 現在参照している要素をtextareaに設定
            ref={textareaRef}
            className={classes.textarea}
          />
          <button className={classes.button}>送信する</button>
        </form>
      </div>
    </div>
  );
};

export default App;
