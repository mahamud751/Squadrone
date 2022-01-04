import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@mui/material";
import { setProducts } from "../../../redux/actions/Action";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Navigation from "../../Shared/Navigation/Navigation";

const Products = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://pacific-wave-94058.herokuapp.com/products")
            .catch((err) => {
            });
        dispatch(setProducts(response.data.slice(0, 6)));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={4}>
                    <ProductDisplay />
                </Grid>
            </Container>
        </>
    );
};

export default Products;
