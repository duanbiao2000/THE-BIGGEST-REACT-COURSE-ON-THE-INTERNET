import { useRef, useEffect, useState } from "react";

/**
 * Timer组件，用于创建一个计时器，每秒更新一次计数
 * 该组件展示了如何使用React Hooks（useState和useEffect）来管理状态和副作用
 */
const Timer = () => {
  // 初始化计数状态，初始值为0
  const [count, setCount] = useState(0);
  // 使用ref来存储interval ID，避免在每次渲染时都创建新的interval
  const intervalRef = useRef(null);

  // 使用useEffect来设置interval，空依赖数组确保该副作用只在组件挂载和卸载时触发
  useEffect(() => {
    // 创建一个interval，每秒执行一次，累加计数
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // 组件卸载时清除interval，避免内存泄漏
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // 渲染Timer组件UI
  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
