
export default function AddMenuSearchWithDropdown() {
   return (
      <div className="max-w-xs">
         <input
            type="text"
            placeholder="Search Dish"
            className="input input-bordered input-md w-full max-w-xs"
         />
         <ul className="menu bg-base-100 w-56">
            <li><button>Item 1</button></li>
            <li><button className="active">Item 2</button></li>
            <li><button>Item 3</button></li>
         </ul>
      </div>
   )
}