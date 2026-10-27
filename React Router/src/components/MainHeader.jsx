import { Outlet } from "react-router-dom"

const MainHeader = () => {
  return (
    <div>
        <Outlet />
        Home Page
    </div>
  )
}

export default MainHeader