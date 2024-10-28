import { useForm, SubmitHandler } from "react-hook-form";
import "../style.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

// 定义一个React函数组件MyForm
const MyForm: React.FC = () => {
  // 使用useForm钩子，定义表单数据类型为FormData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // 定义提交处理函数，参数类型为FormData
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          {/* 为LastName添加标签 */}
          <label htmlFor="lastName">Last Name</label>
          {/* 为LastName添加输入框，并使用register函数进行验证 */}
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {/* 如果LastName输入框有错误，则显示错误信息 */}
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && <p>{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="zip">ZIP</label>
          <input
            id="zip"
            type="text"
            {...register("zip", { required: "ZIP is required" })}
          />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>

        <div>
          <label htmlFor="completeLocation">Complete Location</label>
          <textarea
            id="completeLocation"
            {...register("completeLocation", {
              required: "Complete Location is required",
            })}
          />
          {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
