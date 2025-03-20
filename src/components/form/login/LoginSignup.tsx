import React from 'react';
import { Tabs, Input, Button, Spinner, Tab } from '@heroui/react';
export function LoginSignupTabs() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //   async function onSubmit(event: React.SyntheticEvent) {
  //     event.preventDefault();
  //     setIsLoading(true);

  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);
  //   }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const inputStyles = {
    base: 'bg-[#1A1A1A] text-gray-300',
    inputWrapper: 'border-gray-600 hover:border-gray-400 rounded-full',
  };

  return (
    <div className="w-[29rem]">
      <Tabs
        aria-label="Login/Signup"
        classNames={{
          tabList: 'grid w-full grid-cols-2 gap-2',
          cursor: 'bg-gray-600',
          tab: 'px-2 py-3 text-gray-300',
        }}
        color="default"
        defaultSelectedKey="login"
        variant="underlined"
      >
        <Tab key="login" title="Login">
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Email"
                  placeholder="m@example.com"
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <Button
                className="mt-4 bg-[#c5c5c5] text-[#1A1A1A] hover:bg-transparent hover:text-gray-300"
                isDisabled={isLoading}
                radius="lg"
                type="submit"
              >
                {isLoading && <Spinner className="mr-2" color="current" size="sm" />}
                Log In
              </Button>
            </div>
          </form>
        </Tab>
        <Tab key="signup" title="Sign Up">
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Email"
                  placeholder="m@example.com"
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  required
                  classNames={inputStyles}
                  label="Address"
                  placeholder="Enter your address"
                  type="text"
                />
              </div>
              <Button
                className="mt-4 bg-[#c5c5c5] text-[#1A1A1A] hover:bg-transparent hover:text-gray-300"
                isDisabled={isLoading}
                radius="lg"
                type="submit"
              >
                {isLoading && <Spinner className="mr-2" color="current" size="sm" />}
                Sign Up
              </Button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
}
