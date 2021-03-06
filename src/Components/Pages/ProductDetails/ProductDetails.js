import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, CardContent, Typography, CardMedia } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { selectedProduct, removeSelectedProduct } from "../../../redux/actions/Action";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { _id, image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://pacific-wave-94058.herokuapp.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);


  return (
    <div className="d-flex justify-content-center align-item-center m-5">
      <div>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              style={{ width: "100%" }}
              // height="550"
              image={`data:image/png;base64,${image}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {title}
              </Typography>


            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {category}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {description}
              </Typography>
            </CardContent>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 5
            }}>
              <Typography variant="h5">
                {<AttachMoneyIcon fontSize="large" />}{price}
              </Typography>
              <Typography variant="h4">
                <Link to={`/booking/${_id}`}> <Button variant="contained">Purchase</Button></Link>
              </Typography>
            </div>

          </Card>


        )}
      </div>
    </div>
  );
};

export default ProductDetails;
