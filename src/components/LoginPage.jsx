

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-bold mb-6 text-center">Become UNDETECTABLE</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <div className="relative">
          <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <svg className="h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12m-3 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6zM12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0zm9 0a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Forgot password?</a>
      </div>
      <button className="w-full bg-blue-900 text-white py-2 rounded-lg">Login</button>
      <button className="w-full bg-white text-gray-700 border border-gray-300 mt-4 py-2 rounded-lg flex items-center justify-center">
        <img src="https://www.google.com/images/icons/product/keep-512.png" alt="Google" className="w-5 h-5 mr-2" />
        Log in with Google
      </button>
    </form>
    <p className="text-center mt-4">
      Dont have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign up</a>
    </p>
  </div>
</div>
  )
}

export default LoginPage