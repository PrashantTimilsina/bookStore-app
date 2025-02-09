import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-qell.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successful");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              onClick={() => {
                document.getElementById("my_modal_3").close();
                navigate("/");
              }}
            >
              ✕
            </button>

            <h3 className="text-lg font-bold">Login</h3>
            {/*Email*/}
            <div className="mt-4 space-y-2 py-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 rounded-md border px-3 outline-none dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*Password*/}
            <div className="mt-4 space-y-2 py-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 rounded-md border px-3 outline-none dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*Button*/}
            <div className="mt-4 flex justify-around">
              <button className="rounded-md bg-pink-500 px-3 py-1 text-white duration-200 hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer text-blue-500 underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
