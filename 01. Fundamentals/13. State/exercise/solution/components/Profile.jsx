import { useState } from "react";

const Profile = () => {
  // Initialize state with an object containing name and age
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  // Handle input changes
  /**
   * 处理表单输入变化的事件处理器
   * @param {Event} e - 触发事件的对象，通常为input元素的change事件
   */
  const handleChange = (e) => {
    // 从事件对象的目标元素中解构出name和value属性
    const { name, value } = e.target;

    // 更新profile状态，使用新的name和value值
    // 使用扩展运算符保留原有的profile属性，并覆盖或新增name对应的属性
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, // 动态设置属性名，属性名为name的值，属性值为value的值
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
