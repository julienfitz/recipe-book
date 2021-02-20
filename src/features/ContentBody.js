import ColumnList from './ColumnList';

export default function ContentBody() {
  return (
    <div className='m-5 grid gap-4 grid-cols-3'>
      <ColumnList />
      <ColumnList />
      <ColumnList />
    </div>
  )
}