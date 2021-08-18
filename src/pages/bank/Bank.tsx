import React, { useState, useReducer } from 'react';
import styles from './Bank.module.scss';

type State = {
  savings: number;
  histories: { operation: string; amount: number }[];
};

type Action =
  | { type: 'DEPOSIT'; payload: number }
  | { type: 'WITHDRAW'; payload: number };

const initialState = {
  savings: 100000,
  histories: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        savings: state.savings + action.payload,
        histories: [
          ...state.histories,
          { operation: '預け入れ', amount: action.payload },
        ],
      };
    case 'WITHDRAW':
      return {
        ...state,
        savings: state.savings - action.payload,
        histories: [
          ...state.histories,
          { operation: '引き出し', amount: action.payload },
        ],
      };
    default:
      return state;
  }
};

const Bank: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState<number>(0);

  const onDeposit = (amount: number) => {
    dispatch({ type: 'DEPOSIT', payload: amount });
    setAmount(0);
  };
  const onWithdraw = (amount: number) => {
    dispatch({ type: 'WITHDRAW', payload: amount });
    setAmount(0);
  };

  return (
    <div>
      <h4>残高：{state.savings.toLocaleString()}円</h4>
      <div className={styles.operationArea}>
        <div>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            type='number'
          />
          <span>円</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => onDeposit(amount)}>預け入れ</button>
          <button onClick={() => onWithdraw(amount)}>引き出し</button>
        </div>
      </div>
      <div className={styles.history}>
        <h4>履歴</h4>
        {state.histories.map((history) => {
          return (
            <p>
              {history.operation}:{history.amount.toLocaleString()}円
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Bank;
