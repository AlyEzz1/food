import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminEditProductsHook from '../../hook/products/edit-products-hook';



const AdminEditProducts = () => {
    const { id } = useParams();

    const [CatID, onChangeDesName, onChangeQty,
        , onChangePriceAfter, onChangePriceBefor,
         onChangeProdName,onSeletCategory, category, priceAftr,
          images, setImages, onSelect, onRemove, options,
            handelSubmit, priceBefore,
             qty, prodDescription, prodName] =AdminEditProductsHook(id)
      
console.log(id)
    return (
        <div   >
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> تعديل المنتج - {prodName}</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>


                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        cropConfig={{ minWidth: 200 }}
                        max={4}
                    />

                    <input
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        value={prodDescription}
                        onChange={onChangeDesName}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                        value={priceAftr}
                        onChange={onChangePriceAfter}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select
                        name="cat"
                        value={CatID}
                        onChange={onSeletCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            category.data ? (category.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                 
               
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminEditProducts