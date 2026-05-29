function LoginModal({
  loginOpen,
  setLoginOpen,
}) {

  if (!loginOpen) return null;

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/50
      z-[999]
      flex
      items-center
      justify-center
    "
    >

      <div
        className="
        bg-white
        w-[420px]
        rounded-[30px]
        p-10
      "
      >

        <h2
          className="
          text-4xl
          font-black
          mb-2
        "
        >
          Welcome Back
        </h2>

        <p className="text-gray-500 mb-8">
          Login to continue shopping
        </p>

        <input
          type="email"
          placeholder="Email"

          className="
          w-full
          border
          p-4
          rounded-full
          mb-4
        "
        />

        <input
          type="password"
          placeholder="Password"

          className="
          w-full
          border
          p-4
          rounded-full
          mb-6
        "
        />

        <button
          className="
          w-full
          bg-black
          text-white
          py-4
          rounded-full
          font-semibold
        "
        >
          Login
        </button>

        <button

          onClick={() =>
            setLoginOpen(false)
          }

          className="
          mt-5
          w-full
          border
          py-4
          rounded-full
        "
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default LoginModal;