import { Displayer, SideNavLeft, SideNavRight } from '../../../ui/layout'
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
