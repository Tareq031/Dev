
import Logo from "../assets/logo-text.png";

const Nav = () => {


  return (
    <nav className="bg-red-100 ">
      <div className="container mx-auto flex items-center justify-between py-4">
        
       
        <div>
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        
        <ul className="flex items-center text-red-400 gap-6">
          <li className="text-red-400"  >Home</li>
          <li  text-black>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="rounded-md border  text-red-400  border-gray-600 px-4 py-2">
            Sign In
          </button>

          <button className="rounded-md bg-primary px-4 py-2 text-white">
            Sign Up
          </button>
        </div>

       
        

      </div>
    </nav>
  );
};

export default Nav;