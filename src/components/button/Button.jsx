

export const Button = ({ customFunction, customClass, text }) => {
  return (
    <button className={ customClass } onClick={ customFunction }>
      { text }
    </button>
  )
}
