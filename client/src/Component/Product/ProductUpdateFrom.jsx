import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import ProductStore from "../../../store/ProductStore";
//import Submitbtn from "../../Component/Submitbtn";

import { useParams } from "react-router-dom";
const ProductUpdateFrom = () => {
  let { productID } = useParams();

  useEffect(() => {
    (async () => {
      await ProductReadRequest(productID);
    })();
  }, []);

  const {
    Createproduct,
    setCreateproduct,
    //CreateRequest,
    ProductReadRequest,
    //ReadRequest
  } = ProductStore();

  //let { id } = useParams();
  // let productID = useParams();
  // useEffect(() => {
  //   (async () => {
  //     await ReadRequest(productID);
  //   })();
  // }, []);
  // const SubmitLoing = async () => {
  //   await CreateRequest(Createproduct);
  // };
  // const DeleteProduct = async ()=>{
  //   await DeleteProduct(productID)
  // }
  // let productID = useParams();
   const { UpdateRequest } = ProductStore();

  const Save = async () => {
    console.log("bal");
    let res = await UpdateRequest(Createproduct);
    console.log(res);
    if (res) {
      toast.success("Profile Updated");
      await ProductReadRequest(productID);
    }
  };
  return (
    <div className=" h-screen flex justify-center items-center bg-green-200">
      <div className="bg-green-600 my-4 px-16 py-4 rounded-lg">
        <h2 className=" flex justify-center mb-4">Update Product</h2>
        <form>
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
          <button
            onClick={Save}
            class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded-full "
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdateFrom;
