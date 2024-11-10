

const Login = () => {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-2-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">Sign Up</h3>
        <div className="dlex flex-col gap-4 mt-7">
          <input type="text" placeholder="Your Name" className="h-14 w-full pl-5 bg-slate-900/5 outline-non rounded-xl" />
          <input type="email" placeholder="Email Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-non rounded-xl"  />
          <input type="password" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-non rounded-xl"/>
        </div>
        <div>
          <button className="btn_dark_rounded my-5 w-full !rounded-md">Continue</button>
          <p className="text-black font-bold">Already have an account? <span>Login</span></p>
          <div className="flexCenter mt-6 gap-3">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login