import React from 'react';
import classes from './Button.module.scss';

type Props = {
  buttonText: string;
  onClick: () => void;
};

// React.memoでラップすることでButtonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
// React.memoでPropsの前後の値を比較してレンダリングするかを決定しています。
const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
  console.log(`Button:${buttonText}`);

  return (
    <div className={classes.root}>
      <button onClick={onClick} type='button' className={classes.button}>
        {buttonText}
      </button>
    </div>
  );
});

export default Button;
