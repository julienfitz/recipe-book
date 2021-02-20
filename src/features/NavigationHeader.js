export default function NavigationHeader () {
  return (
    <nav className='p-2 px-6 bg-yellow-400 bg-opacity-75 text-blue-900'>
      <ul className='flex'>
        <li className='flex font-bold font-nav text-xl text-left flex-1 space-x-2'>
          <span>
            Recipe Book
          </span>    
          <span className='material-icons'>
            menu_book
          </span></li>
        <li>
          <label for='search'>
          </label>
          <input
            type='search'
            id='search'
            className='object-center border-2 rounded-full text-left px-4 py-1 text-sm flex-1 border-2 border-blue-900'
            placeholder='Search recipes'
            size='60'
          />
        </li>
        <li className='text-right flex-1'>
          <span className='material-icons'>
            account_circle
          </span>
        </li>
      </ul>
    </nav>
  )
}