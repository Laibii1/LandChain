import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple ,FaArrowLeft,FaEye, FaEyeSlash} from 'react-icons/fa';
import Logo from "../assets/LandChain-dark.png";
import HouseImg from "../assets/Signup-img.png";
import '../Components/font.css';

function SignUp() {
  const navigate = useNavigate();
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Agree, setAgree] = useState(false);

  const handleRegisterAccount = () => {
  const newErrors = {
    Firstname: Firstname ? '' : 'First name is required.',
    Lastname: Lastname ? '' : 'Last name is required.',
    Email: Email ? '' : 'Email is required.',
    Password: '',
    Agree: Agree ? '' : 'You must agree to the Terms & Conditions.',
  };

  if (!Password) {
    newErrors.Password = 'Password is required.';
  } else if (!isStrongPassword(Password)) {
    newErrors.Password =
      'Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.';
  }

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some((error) => error !== '');
  if (hasErrors) return;

  // All valid
  console.log({ Firstname, Lastname, Email, Password });
  navigate('/login');
};


// strong password limitations
const [showPassword, setShowPassword] = useState(false);
const [passwordError, setPasswordError] = useState('');

const isStrongPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

// errors messages
const [errors, setErrors] = useState({
  Firstname: '',
  Lastname: '',
  Email: '',
  Password: '',
  Agree: '',
});

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#191919] text-white flex overflow-hidden shadow-lg">
        
        {/* Left Side with Image */}
     <div className="w-2/3 hidden md:block relative px-3 py-5">
  <div className="w-full h-full rounded-lg overflow-hidden br-2 border-black-900">
    <img
      src={HouseImg}
      alt="Architecture"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute top-6 left-6">
    <img src={Logo} alt="Landchain Logo" className="h-12" />
  </div>

  <button
    onClick={() => navigate('/')}
    className="absolute top-10 right-6 text-[12px] border border-white rounded-full px-4 py-1 bg-[#2C2C2C] hover:border-[#D0482E] transition font-ReemKufi flex items-center gap-2"
  >
    <FaArrowLeft className="text-white text-sm" />
    Back to Main page
  </button>
</div>

        {/* Right Side Form */}
        <div className="w-full text-center justify-center md:w-1/2 px-4 py-20">
          <h2 className="text-xl font-bold  mb-2 font-Inter">Create An Account</h2>
          <p className="text-[12px] mb-6 font-ReemKufi">
            Already have an account?{' '}
            <a href="/login" className="text-white font-semibold underline font-ReemKufi font-bold">
              Log in
            </a>
          </p>

          <div className="grid grid-cols-2 gap-2 mb-2">
           <input
  type="text"
  placeholder="First name"
  value={Firstname}
  onChange={(e) => setFirstName(e.target.value)}
  className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi w-full"
/>
{errors.Firstname && <p className="text-red-500 text-xs mt-1">{errors.Firstname}</p>}

           <input
  type="text"
  placeholder="Last name"
  value={Lastname}
  onChange={(e) => setLastName(e.target.value)}
  className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi w-full"
/>
{errors.Lastname && <p className="text-red-500 text-xs mt-1">{errors.Lastname}</p>}

          </div>

        <input
  type="email"
  placeholder="Enter your email"
  value={Email}
  onChange={(e) => setEmail(e.target.value)}
  className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi w-full"
/>
{errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email}</p>}

       <div className="relative mb-2 mt-2">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Enter your password"
    value={Password}
    onChange={(e) => {
      setPassword(e.target.value);
      setErrors({ ...errors, Password: '' });
    }}
    className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi w-full pr-10"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2 text-gray-400"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>
{errors.Password && <p className="text-red-500 text-xs mb-2">{errors.Password}</p>}


           <label className="flex items-start text-sm mb-4 space-x-2">
  <input
    type="checkbox"
    checked={Agree}
    onChange={() => setAgree(!Agree)}
    className="mt-1 accent-white bg-transparent"
  />
  <span className="text-[12px] font-ReemKufi">
    I agree to{' '}
    <a href="#" className="text-[#D0482E] underline">
      Terms & Conditions
    </a>
  </span>
</label>
{errors.Agree && <p className="text-red-500 text-xs mb-4">{errors.Agree}</p>}


          <button
            onClick={handleRegisterAccount}
            className="w-full font-ReemKufi font-bold bg-[#D0482E] hover:bg-[#A5250D] text-white font-semibold py-2 rounded transition"
          >
            Create an Account
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-sm font-ReemKufi">Or</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border border-white py-2 rounded flex items-center justify-center gap-2 hover:border-[#D0482E]  transition">
              <FcGoogle className="text-md font-ReemKufi" /> Google
            </button>
            <button className="flex-1 border border-white py-2 rounded flex items-center justify-center gap-2 hover:border-[#D0482E]  transition">
              <FaApple className="text-md font-ReemKufi" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
