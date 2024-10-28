// 导入Category.css样式文件
import "./Category.css";
// 导入Input组件
import Input from "../../components/Input";

// 定义Category组件
function Category({ handleChange }) {
  // 返回一个div，包含一个h2标题和多个Input组件
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        // 定义一个label，包含一个input和一个span
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        // 定义一个Input组件，包含handleChange、value、title和name属性
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

// 导出Category组件
export default Category;