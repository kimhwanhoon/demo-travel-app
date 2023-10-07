'use client';

import { Button, ButtonGroup, PasswordInput, TextInput } from '@mantine/core';
import React, { useState } from 'react';

export default function MainPage() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <form
        className="w-[80%] flex flex-col gap-1"
        onSubmit={submitHandler}
      >
        <TextInput
          label="Email"
          placeholder="Email"
          description="please write your email."
          required
          radius={'md'}
        />
        <PasswordInput
          radius={'md'}
          label="password"
          required
          placeholder="Password"
        />
        <ButtonGroup className="mt-2">
          <Button
            type="submit"
            variant="filled"
            fullWidth
            loading={isClicked}
          >
            Log in
          </Button>
          <Button
            fullWidth
            type="reset"
            variant="default"
          >
            Clear
          </Button>
        </ButtonGroup>
        <Button
          type="submit"
          variant="filled"
          fullWidth
          loading={isClicked}
        >
          Log in
        </Button>
      </form>
    </main>
  );
}
