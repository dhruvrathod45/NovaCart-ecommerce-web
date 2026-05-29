function AuthScreen({
  enterStore,
}) {

  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-black
      flex
      items-center
      justify-center
      text-white
    "
    >

      <div
        className="
        w-[420px]
        bg-[#111]
        p-10
        rounded-[40px]
        border
        border-white/10
      "
      >

        <p
          className="
          uppercase
          tracking-[5px]
          text-sm
          text-gray-400
          mb-4
        "
        >
          Premium Fashion Store
        </p>

        <h1
          className="
          text-6xl
          font-black
          leading-none
          mb-4
        "
        >
          NOVACART
        </h1>

        <p
          className="
          text-gray-400
          mb-8
        "
        >
          Sign in to access exclusive
          collections & luxury streetwear.
        </p>

        <input
          type="email"
          placeholder="Email"

          className="
          w-full
          p-4
          rounded-full
          bg-[#1a1a1a]
          border
          border-white/10
          mb-4
        "
        />

        <input
          type="password"
          placeholder="Password"

          className="
          w-full
          p-4
          rounded-full
          bg-[#1a1a1a]
          border
          border-white/10
          mb-6
        "
        />

        <button

          onClick={enterStore}

          className="
          w-full
          bg-white
          text-black
          py-4
          rounded-full
          font-semibold
        "
        >
          Enter Store
        </button>

      </div>

    </div>
  );
}

export default AuthScreen;