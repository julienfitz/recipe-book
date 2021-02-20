export default function ColumnList() {
  return (
    <ul className='border-2 border-blue-900 p-2 rounded-md bg-blue-50 text-blue-900'>
      <li className='flex space-x-2'>
        <span className='material-icons'>
          add_circle
        </span>
        <span>
          add a recipe
        </span>
      </li>
    </ul>
  )
}