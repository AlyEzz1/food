import React,{useEffect,useState} from 'react'
import Search from '../nav/Search';
import { Nav, NavDropdown } from 'react-bootstrap'




const NavBarLogin = () => {



   const showSearch = () =>{
        document.querySelector('#search-form').classList.toggle('active');
      }

     

      const [user, setUser] = useState('');
      useEffect(() => {
          if (localStorage.getItem("user") != null)
              setUser(JSON.parse(localStorage.getItem("user")))
      }, [])
  
      const logOut = () => {
          localStorage.removeItem("user")
          localStorage.removeItem("token")
          setUser('')
      }
    return (

        // <!-- header section starts      -->
        
        <header >
        <a href="/" className="logo" style={{ textDecoration: 'none' }}><i className="fas fa-utensils"></i>resto.</a>

        <nav className="navbar" >
            <a className="active" href="/" style={{ textDecoration: 'none' }}>home</a>
            <a href="/OurDishes" style={{ textDecoration: 'none' }}>dishes</a>
            <a href="/AboutUs" style={{ textDecoration: 'none' }}>about</a>
            <a href="/OurMenu" style={{ textDecoration: 'none' }}>menu</a>
            <a href="/review" style={{ textDecoration: 'none' }}>review</a>
            <a href="/order" style={{ textDecoration: 'none' }}>order</a>
        </nav>
    
        <div className="icons">
            <i className="fas fa-bars" id="menu-bars"></i>
       <i className="fas fa-search" id="search-icon"  onClick={showSearch}></i>
            <a href="/user/favorite" className="fas fa-heart" style={{ textDecoration: 'none' }}></a>
            <a href="/cart" className="fas fa-shopping-cart" style={{ textDecoration: 'none' }}></a>
           

            {
                            user != '' ? (
                              
                              user.role === "admin" ?(
                              <a  href='/admin/allproducts'
                                style={{textDecoration: 'none' }}
                                   ><img   src={user.profileImg} alt="" className='image-profile'/>  </a>
                                   ):
                                   (

                                    <a  href='/user/profile'
                                style={{ textDecoration: 'none' }}
                                   > <img   src={user.profileImg} alt="" className='image-profile'/> </a>)
                                   )
//                                    <NavDropdown title={user.name} id="basic-nav-dropdown">
// {
//     user.role === "admin" ? (<NavDropdown.Item href="/admin/allproducts">لوحة التحكم</NavDropdown.Item>) :
//      (<NavDropdown.Item href="/user/profile">الصفحه الشخصية</NavDropdown.Item>)
// }
// <NavDropdown.Divider />
// <NavDropdown.Item onClick={logOut} href="/">تسجيل خروج</NavDropdown.Item>

// </NavDropdown>
                                
                            
                            :
                                (<a  href='/login'
                                className="fas fa-user-circle" style={{ textDecoration: 'none' }}
                                   >
                                   
                                </a>)
                              
                        }
  <a  href='/' onClick={logOut} style={{ textDecoration: 'none' }}> logout</a>

         
        </div>


<Search/>

</header>

    // <!-- header section ends-->



     
    )
}

export default NavBarLogin

