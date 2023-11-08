import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';
import Container from "../../components/ui/Container";

const Login = () => {
    const[showPassword, setShowPassword] = useState(false)
    const {login, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            swal("Login successfully", "", "success");
            navigate(location?.state ? location?.state : '/');
            

        })
        .catch(error =>{
            
           console.error(error);
           swal("Wrong user information", "", "warning");
        })
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
      <Container>
        <div className="flex flex-col md:flex-row-reverse justify-evenly mx-auto items-center">
            <div>
              <img className="w-[60vh]" src="https://i.ibb.co/HtcJD7X/sign.jpg" alt="" />
            </div>
            <div className="card bg-green-200 shadow-2xl mb-8">
            <h2 className="text-3xl my-6 text-center font-bold">Login your account</h2>
            <form onSubmit={handleLogin} className="w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative input input-bordered">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="pt-2" required />
            <span className="absolute top-3 right-3" onClick={ () => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>
            </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-700 normal-case text-white font-semibold text-2xl">Login</button>
        </div>
            </form>
        <div className="form-control pt-4 px-12">
          <button onClick={handleGoogleSignIn} className="btn btn-outline text-green-600 normal-case font-semibold text-2xl"><FcGoogle/> Login with Google</button>
        </div>
            <p className="text-center mt-4 pb-4">Do not Have An Account ? <Link to='/signUp' className="font-extrabold text-blue-600">Register</Link></p>
            </div>
        </div>
        </Container>
    );
};

export default Login;
