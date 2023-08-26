import React,{useState} from 'react'
import { Col, Card, Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../redux/actions/productsAction'

export const AdminAllProductsCard = ({item}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handelDelete = async () => {

      await dispatch(deleteProducts(item._id))
      setShow(false);
      window.location.reload();
  }

  return (
    <div className="box">
      <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'> sure delete </div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'> are you sure you want to delete product?</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        cancle
                    </Button>
                    <Button className='font' variant="dark" onClick={handelDelete}>
                        delete
                    </Button>
                </Modal.Footer>
            </Modal>
            
    <Link to={`/admin/editproduct/${item._id}`} >
    <div  className=" fa-solid fa-user-pen fa-bounce fa-2xl" style={{color: "#192a56"}}> </div> 
    </Link>
    <div onClick={handleShow} className=" fa-solid fa-trash fa-bounce fa-2xl" style={{color: "#192a56"}}> </div>
   
    <img src={item.imageCover} alt=""/>
    <h3>{item.title} </h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
       
      
    </div>
    <div className="card-price">{item.priceAfterDiscount >= 1 ?
                                        (<div><span style={{ textDecorationLine: 'line-through' }}>{item.price}</span>
                                        <span>{item.priceAfterDiscount} </span></div>): item.price } </div>
    {/* <span>{item.price}</span> */}
  
    
    
</div>
  )
}
export default AdminAllProductsCard;

<i class="fa-solid fa-trash fa-bounce fa-2xl"></i>




