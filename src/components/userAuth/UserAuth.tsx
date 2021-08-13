import React from 'react';
import AuthButton from './AuthButton';
import AuthDisplay from './AuthDisplay';

const UserAuth: React.VFC = () => {
  return (
    <div>
      <h4>ユーザ認証</h4>
      <AuthButton />
      <AuthDisplay />
    </div>
  );
};

export default UserAuth;
