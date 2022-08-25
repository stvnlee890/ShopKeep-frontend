import { Link, Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <>
      <div>
        <h1>AdminPage</h1>
      </div>
      <nav>
        <Link to='setstore'>Set New Shop</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminPage