import {React, useId, useState } from "react";

/**
 * 生成唯一ID的函数组件
 * 
 * 该组件用于创建包含唯一ID的表单元素，以确保即使有多个实例，表单元素的ID也不会重复
 * 它通过useId钩子获取一个唯一的ID，并围绕该ID构建表单元素
 */
const UniqueID = () => {
  // 使用useId钩子获取一个唯一的ID
  const id = useId();

  // 返回一个包含唯一ID的表单结构
  return (
    <div>
      // 为email输入框设置唯一ID和对应的label
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      <br />
      // 为name输入框设置唯一ID和对应的label
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </div>
  );
};

export default UniqueID;
