import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Space } from 'antd';
import { createProduct } from "../../../actions/productActions";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { getStorage, ref, uploadBytes , uploadBytesResumable, getDownloadURL} from "firebase/storage";
import "./newProduct.css";
import app from "../../../firbase";
import Message from "../../../Components/message/Message";
import Loader from "../../../Components/loader/Loader";


 const NewProduct = () => {
    const  [inputs, setInputs] = useState({})
    // const  [category, setCategory] = useState()
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])
    const [file, setFile] = useState(null)
   

const dispatch = useDispatch()
const productCreate = useSelector((state) => state.productCreate)

const {loaidng, success, product}= productCreate

console.log(inputs);

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

const handleCreate = (e) => {
  e.preventDefault()
  // todo
  // unique identifier for firebase = jposh-4046b
  // create a unique file name for the images
  const fileName = new Date().getTime() + file.name;
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

      dispatch(createProduct(product))
    });
  }
);
}

useEffect(() => {
  const openNotificationWithIcon = (type, placement) => {
    // open notification
    notification[type]({
        message: 'SUCCCESS',
        duration: 1,
        description:
          'Product created successfully!',
      });   
  }
  
  success && openNotificationWithIcon('success', 'top')
}, [success])

  return (
    <div>
      <Topbar />
      <main className="newProduct-container">
        <Sidebar />
      <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Product Name" name='title' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="Product Price" name='price' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="text" placeholder="Video URL (youtube or instagram link)" name='video' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Discount Price</label>
          <input type="number" placeholder="Product Discount Price" name='discoutPrice' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name='category' onChange={handleChange}>
            <option>choose an option</option>
            <option value='women'>Women </option>
            <option value='men'>Men</option>
            <option value='Accessries'>Accessries</option>
            <option value='track suits'>Track suits</option>
            <option value='Aso ebi'>Aso ebi</option>
            <option value='Adire/Bubu dress'>Adire/Bubu dress</option>
            <option value='Ankara set'>Ankara set</option>
            <option value='Bonnet cap'>Bonnet cap</option>
            <option value='Braided head band'>Braided head band</option>
            <option value='Sequins head band'>Sequins head band</option>
            <option value='Pallazo'>Pallazo</option>
            <option value='others'>Others</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea name="desc" rows="10" cols="50" maxlength="150" placeholder="Product Description" onChange={handleChange}></textarea>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option>choose an option</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Number in Stock</label>
          <input type="text" placeholder=" number in stock" name='countInStock' onChange={handleChange}/>
        </div>
        <div className="addProductItem" >
          <label>Discount</label>
          <select name="discount" onChange={handleChange}>
            <option>choose an option</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text"  placeholder="XL, L, M..." onChange={handleSizes} />
        </div>
        <div className="addProductItem">
          <label>color</label>
          <input type="text" placeholder="Red, Blue, Green ..."  onChange={handleColors} />
        </div>
        <button className="addProductButton" onClick={handleCreate}>Create</button>
      </form>
    </div>
      </main>
    </div>
  );
}

export default NewProduct
