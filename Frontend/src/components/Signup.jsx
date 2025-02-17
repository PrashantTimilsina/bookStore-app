import {
  Link,
  Navigate,
  replace,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-qell.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful");
          navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className="dark:bg-slate-900 dark:text-white"
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="text-lg font-bold">Signup</h3>
              <div className="mt-4 space-y-2 py-1">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 rounded-md border px-3 outline-none dark:text-black"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
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
                  type="text"
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
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    to="/"
                    className="cursor-pointer text-blue-500 underline"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
