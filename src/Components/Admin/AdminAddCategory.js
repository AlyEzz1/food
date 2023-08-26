import React from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import AddCategoryHook from '../../hook/category/addCategoryhook'

const AdminAddCategory = () => {
  const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =AddCategoryHook();

    return (
        

        <div className="justify-content-center  my-5  mx-5">
            <Row >
                <div className="admin-content-text pb-4"> Add New Kind Food  </div>
                <Col sm="8">
                    <div className="text-form pb-2"> kind food image </div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                        className='btn-category'
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="name kind food "
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex  justify-content-end ">
                    <button  onClick={handelSubmit} className=" btn-admin"> save </button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory
