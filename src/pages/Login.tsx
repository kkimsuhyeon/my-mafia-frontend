import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

export interface LoginProps {}

function Login({ history }: RouteComponentProps) {
  const goToSignup = useCallback(() => {
    history.push('/signup');
  }, [history]);

  return (
    <Main>
      <LoginWrapper>
        <div>
          <span>아이디</span>
          <input />
        </div>
        <div>
          <span>비밀번호</span>
          <input />
        </div>
        <SubmitButton>제출</SubmitButton>
        <SignupLink onClick={goToSignup}>회원가입</SignupLink>
      </LoginWrapper>
    </Main>
  );
}

export default Login;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  background-color: yellow;
  padding: 2rem;
  border-radius: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    & > span {
      margin-right: 2rem;
    }

    & > input {
      height: 1.5rem;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
`;

const SignupLink = styled.p`
  display: block;
  width: fit-content;
  margin-left: auto;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;
