export default function ColumnHeader({ headerText }) {
  return (
    <span className='p-2 rounded-md bg-blue-900 font-nav text-blue-50 text-center border-2 border-blue-50'>
      {headerText}
    </span>
  )
}