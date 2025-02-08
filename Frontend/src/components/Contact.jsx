import Navbar from "./Navbar";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="space-y-5 w-[500px] border shadow-2xl p-5 rounded-md">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          <div className="space-y-3">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-8 p-2"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-3">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-8 p-2"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-3">
            <p>Message</p>
            <input
              type="text"
              placeholder="Type your message"
              className="w-full h-8 p-2"
              {...register("message", { required: true })}
            />
            <br />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button className="text-white bg-blue-700 p-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
