const Header = () => {
  return (
    <header className="
      w-full
      flex
      justify-start
      items-center
      gap-4
    ">
      <button className="font-bold text-white bg-green-300 flex items-center justify-center w-14 h-14 rounded-full">
        P
      </button>
      <h3
        className="font-bold lg:text-2xl font-medium"
      >
        NOTETAKER | DJ
      </h3>
    </header>
  );
}
 
export default Header;