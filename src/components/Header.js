const Header = ({ toggle, setToggle }) => (
  <nav className="fixed top-0 z-10 flex w-full justify-between bg-[#F45050] p-3">
    <div className="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
      <p className="text-xl font-bold text-gray-900">Bob's Orchestra Hall</p>
    </div>
    <div className="mb-[0.125rem] mt-[0.1rem] block flex min-h-[1.5rem] content-center justify-items-center  pl-[1.5rem]">
      <input
        className="h-[1.3rem] w-[1.3rem] mt-[0.2rem] accent-gray-900"
        type="checkbox"
        value=""
        id="checkboxDefault"
        onClick={() => setToggle(!toggle)}
      />
      <label
        className="text-xl text-gray-900 inline-block pl-[0.5rem] hover:cursor-pointer"
        htmlFor="checkboxDefault"
      >
        Extra
      </label>
    </div>
  </nav>
);

export default Header;
