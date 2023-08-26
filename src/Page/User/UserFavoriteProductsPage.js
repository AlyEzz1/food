import React from 'react'
import UserSideBar from '../../Components/User/UserSideBar'
import { Container, Row, Col } from 'react-bootstrap'



import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct'
const UserFavoriteProductsPage = () => {
    return (
        <Container fluid>
        <Row className='py-5'>
            <Col sm="" xs="2" md="2">
                <UserSideBar />
            </Col>

            <Col sm="9" xs="10" md="10">
                <UserFavoriteProduct />
            </Col>
        </Row>
    </Container>
    )
}

export default UserFavoriteProductsPage
