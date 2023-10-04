import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header-item-container'>
      <Link className='header-item-wrapper' to='/'>
        <li className='header-item'>Home</li>
      </Link>
      <Link className='header-item-wrapper' to='/summary'>
        <li className='header-item'>Summary</li>
      </Link>
      <Link className='header-item-wrapper' to='/cashflow'>
        <li className='header-item'>Cashflow</li>
      </Link>
      <Link className='header-item-wrapper' to='/insight'>
        <li className='header-item'>Insights</li>
      </Link>
      <Link className='header-item-wrapper' to='/spending'>
        <li className='header-item'>Spending</li>
      </Link>
      <Link className='header-item-wrapper' to='/highlight'>
        <li className='header-item'>Highlights</li>
      </Link>
    </div>
  )
}

export default Header
