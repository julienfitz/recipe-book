import ColumnHeader from './ColumnHeader';

export default function ContentHeader() {
  return (
    <div className='m-5 grid gap-4 grid-cols-3'>
      <ColumnHeader headerText={'My Recipes'}/>
      <ColumnHeader headerText={'Starred Recipes'}/>
      <ColumnHeader headerText={'Friend Feed'}/>
    </div>
  )
}