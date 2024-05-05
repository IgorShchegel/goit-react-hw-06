import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input className={css.input} type="text" value={value} onChange={onChange} />
    </label>
  )
}

export default SearchBox