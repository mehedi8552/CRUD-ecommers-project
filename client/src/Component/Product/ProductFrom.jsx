import React, { useEffect } from "react";
import ProductStore from "../../../store/ProductStore";
import Submitbtn from "../../Component/Submitbtn";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
function ProductFrom() {

   
  const {
    Createproduct,
    setCreateproduct,
    CreateRequest,
    ProductRequest,
    ProductList,
  } = ProductStore();
  
  useEffect(() => {
    (async () => {
      await ProductRequest();
    })();
  }, [ProductList]);

  //console.log(ProductList);
  // useEffect(async () => {
  //   await ProductRequest();
  // }, [ProductList]);
  //console.log(ProductList);

  const SubmitLoing = async () => {
    await CreateRequest(Createproduct);
  };
  const DeleteProduct = async () => {
    await DeleteProduct(productID);
  };

  return (
    <>
      <div className=" flex items-center justify-center bg-green-200">
        <form className="bg-green-600 my-4 px-6 py-4 rounded-lg">
          <h2 className=" flex justify-center mb-4">Create Product</h2>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={Createproduct.name}
              onChange={(e) => setCreateproduct("name", e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Brand:
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              value={Createproduct.brand}
              onChange={(e) => setCreateproduct("brand", e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={Createproduct.category}
              onChange={(e) => setCreateproduct("category", e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="description"
              value={Createproduct.description}
              onChange={(e) => setCreateproduct("description", e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL:
            </label>
            <input
              type="url"
              className="form-control"
              id="image"
              value={Createproduct.image}
              onChange={(e) => setCreateproduct("image", e.target.value)}
              required
            />
          </div>
          <Submitbtn onClick={SubmitLoing} text="next" />
        </form>
      </div>

      <div className=" flex m-2 ">
        {ProductList?.map((item, i) => {
          return (
            <>
              <div className="m-2 shadow-xl no-underline">
              <div key={item.image} className= 'py-2 px-2 bg-slate-200 rounded-xl'>
          <img  className="h-40  w-48 rounded-xl " src={item.image} alt="" />
        <div className="text-center space-y-1">
          <div>
          <p className="font-medium"> <span className="text-black font-medium"> Name:</span> {item.name}</p>
          </div>
          <p className=""> <span className="text-black font-medium">Category: </span>{item.category}</p> 
          
          <div className="flex justify-center">
            <span className="text-black font-medium">Price: </span>
          <p className="line-through text-gray-500 "> $500</p> <span className="text-green-500">$300</span>
          </div>
          <div  className=" flex justify-center text-blue-500 ">
          <Link to={`/ProductDetails/${item._id}`} className="font-medium py-1 px-3  rounded-xl mt-2 text-gray-400 hover:text-black no-underline">Visit</Link>
          <Link to={`/ReadbyProduct/${item._id}`} className="font-medium py-2 px-3  rounded-xl mt-2 text-gray-400  hover:text-black"><FaEdit/></Link>
          </div>
        </div>
        </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductFrom;
