import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, updateProduct } from "../../../actions/productActions";
import { getStorage, ref, uploadBytes , uploadBytesResumable, getDownloadURL} from "firebase/storage";
import app from "../../../firbase";
import Message from "../../../Components/message/Message";
import Loader from "../../../Components/loader/Loader";

 const DashProduct = () => {
     const params = useParams()
     
     const  [inputs, setInputs] = useState({})
     const [size, setSize] = useState([])
     const [color, setColor] = useState([])
     
     const dispatch = useDispatch()

     const productId = params.productId;
     const productDetails = useSelector((state) => state.productDetails)
     const productUpdate = useSelector((state) => state.productUpdate)
    const{loading, product} =  productDetails

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        e.preventDefault()
        setInputs(prev => {
          return {...prev, [e.target.name]: e.target.value}
        })
      }
      const handleColors = (e) => {
        e.preventDefault()
        setColor(e.target.value.split(','))
      }
      const handleSizes = (e) => {
        e.preventDefault()
        setSize(e.target.value.split(','))
      }

     useEffect(() => {
         dispatch(listProductDetails(productId))
     }, [dispatch, productId])


     const handleUpdate = (e) => {
        e.preventDefault()
        // todo
        // unique identifier for firebase = jposh-4046b
        // create a unique file name for the images
        const fileName  = file ? new Date().getTime() + file.name  : product.img
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName)
      
      
      
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
          if(error){
            Message('error', 'file upload failed')
          }
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {...inputs, size, color, img: downloadURL};
      
            dispatch(updateProduct(product, productId))
          });
        }
      );
      }

  return (
   <div>
       <Topbar />
       <main className="product-dash-container">
           <Sidebar />
       <div className="dash-product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              {/* <Chart data={productData} dataKey="Sales" title="Sales Performance"/> */}
              {
                product ? <div className="productInfoItem">
                <span className="productInfoKey">Description: </span>
                <p className="productInfoValue"> {product.desc}</p>
                </div>
                          :
                <div className="loader-box">
                    <Loader />
                </div>
              }
          </div>
        
            <div className="productTopRight" >
                  {
                    product ? <div className="productInfoTop">
                    <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productInfoValue">{product.title}</span>
                    </div> :
                      <div className="loader-box">
                          <Loader />
                      </div>
                  }
                 {
                   product ?
                   <div className="productInfoBottom">
                   <div className="productInfoItem">
                       <span className="productInfoKey">id: </span>
                       <span className="productInfoValue"> {productId}</span>
                   </div>
                   {/* <div className="productInfoItem">
                       <span className="productInfoKey">name:</span>
                       <span className="productInfoValue">{product.title}</span>
                   </div> */}
                   {/* <div className="productInfoItem">
                       <span className="productInfoKey">description:</span>
                       <span className="productInfoValue">{product.desc}</span>
                   </div> */}
                   <div className="productInfoItem">
                       <span className="productInfoKey">price:</span>
                       <span className="productInfoValue">£ {product.price}</span>
                   </div>
                   <div className="productInfoItem">
                       <span className="productInfoKey">discount:</span>
                       <span className="productInfoValue">{product.discount ? "true" : "false"}</span>
                   </div>
                   <div className="productInfoItem">
                       <span className="productInfoKey">in stock:</span>
                       <span className="productInfoValue">{product.inStock ? "true" : "false"}</span>
                   </div>
               </div>
               :
               <div className="loader-box">
                       <Loader />
               </div>
                 }
            </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  
                  <input type="text" placeholder="Product name" name="title"  onChange={handleChange}/>
                  
                  <input type="text" placeholder="Product Price" name="price" onChange={handleChange}/>

                  <textarea name="desc" rows="10" cols="50" maxlength="150" placeholder="Product Description" onChange={handleChange}></textarea>

                  <input type="text" placeholder="Product Category" name='category' onChange={handleChange}/>

                  <input type="text"  placeholder="XL, L, M..." onChange={handleSizes} />

                  <input type="text" placeholder="Red, Blue, Green ..."  onChange={handleColors} />

                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange={handleChange}>
                      <option value="true">choose an option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  {/* <label>Discount</label>
                  <select name="discount" id="active">
                      <option value="true">choose an option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select> */}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file"   onChange={(e) => setFile(e.target.files[0])}/>
                  </div>
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
       </main>
   </div>
  );
}

export default DashProduct
