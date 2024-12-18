const AuthLayout = ({ children, title }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            {title}
          </h2>
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;