import FormLogin from '../../components/auth/FormLogin';
import loginImage from '../../assets/download.jpeg';

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      <div className="md:col-span-2 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-4">
          <FormLogin />
        </div>
      </div>
      <div
        className="hidden md:flex md:col-span-3 flex-col justify-center items-center p-12 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome Back</h1>
        <p className="text-xl max-w-sm drop-shadow-lg">
          To keep connected with us please login with your personal info
        </p>
      </div>
      
    </div>
  );
};

export default LoginPage;