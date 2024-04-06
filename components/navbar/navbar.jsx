
import'./navbar.css';
function Navbar(){
    //const [count, setCount] = useState(0)
  
    return (
      <>
   <div className=" navbar bg-base-100">
  <div className="navbar-start">
  
    <a className=" nav text-6xl font-extrabold ">Recipe Calories</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a>Recipe</a>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   
  <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>

<div className='user '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
    </svg>
</div>

  </div>
</div>

        
      </>
    )
  }
  
export default Navbar;
