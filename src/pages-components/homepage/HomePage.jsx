import { Displayer, SideNavLeft, SideNavRight } from '../../layout-components'
import './HomePage.css'


export const HomePage = () => {
  return (
    <div className="inner-container">
      <SideNavLeft />
      <Displayer />
      <SideNavRight />
    </div>
  )
}
