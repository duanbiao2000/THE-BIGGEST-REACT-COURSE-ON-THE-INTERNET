import { createContext, type ReactNode, useState, FC } from 'react';

// Define a type for your context data
type MyContextData = {
  value: string;
  setValue: (newValue: string) => void;
};

// Create a context with an initial value
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a provider component
type MyContextProviderProps = {
  children: ReactNode;
};

/**
 * MyContextProvider组件用于提供一个上下文环境，使得子孙组件可以共享状态
 * 它通过React的Context API创建了一个上下文，并将状态暴露给消费该上下文的组件
 *
 * @param {MyContextProviderProps} props - 组件接收的props，包括子组件
 * @returns {JSX.Element} - 返回一个MyContext.Provider组件，为子孙组件提供上下文
 */
export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  // 初始化一个状态变量'value'，用于存储上下文中的数据
  const [value, setValue] = useState<string>('');

  // 构建一个对象'contextValue'，包含'value'状态及其更新函数'setValue'，作为上下文的值
  const contextValue: MyContextData = {
    value,
    setValue,
  };

  // 返回MyContext.Provider组件，将'contextValue'作为值传递给上下文，包裹并渲染子组件
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContext;
