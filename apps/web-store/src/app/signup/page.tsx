export default function SignUp() {
  return (
    <>
      <div className="flex h-screen flex-row gap-18 p-4">
        <div className="basis-2/4">
          <div className="flex h-full flex-col gap-6 pl-60">
            <div>Logo</div>
            <form action="">
              <h3>Create an account</h3>
              <div>
                I have already an account <span>Sign In</span>
              </div>
              <div className="flex flex-col">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
            </form>
          </div>
        </div>
        <div className="basis-1/2 rounded-xl bg-linear-to-r from-[#E7F0FD] to-[#ACCBEE]">
          02
        </div>
      </div>
    </>
  );
}
