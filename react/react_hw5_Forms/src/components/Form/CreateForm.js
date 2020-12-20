import React from 'react';
import './createForm.scss'
import {useDispatch, useSelector} from "react-redux";
import {checkoutCartAction, setProductsListAction} from "../../redux/actions";
import {Field, Form, Formik} from "formik";
import MyInputFormik from "./MyInputFormik";
import schemas from "./validationSchema";
import {selectProducts} from "../../redux/selectors";

const CreateForm = () => {
    const dispatch = useDispatch();
    let products = useSelector(selectProducts);

    return (
        <Formik
            initialValues={{
                FirstName: '',
                LastName: '',
                Age: '',
                Adress: '',
                Phone: ''
            }}
            validationSchema={schemas}
        >
            {formikProps => {
                return <Form className="form" action="">
                    <div className="form-title">To complete your purchase, fill out the order form, please</div>
                    <Field component={MyInputFormik}
                           className="form-item"
                           type="text"
                           placeholder="First Name"
                           name="FirstName"/>
                    <Field component={MyInputFormik}
                           className="form-item"
                           type="text"
                           placeholder="Last Name"
                           name="LastName"/>
                    <Field component={MyInputFormik}
                           className="form-item"
                           type="text"
                           placeholder="Age"
                           name="Age"/>
                    <Field component={MyInputFormik}
                           className="form-item"
                           type="text"
                           placeholder="Adress"
                           name="Adress"/>
                    <Field component={MyInputFormik}
                           className="form-item"
                           type="text"
                           placeholder="Phone"
                           name="Phone"/>
                    <button type="submit" disabled={!formikProps.isValid || formikProps.isSubmitting}
                            className="header__login-btn"
                            onClick={
                                () => {
                                    console.log("Order details: ")
                                    if (formikProps.touched.FirstName) {
                                        console.log(
                                            `First Name: ${formikProps.values.FirstName};`,
                                            `Last Name: ${formikProps.values.LastName};`,
                                            `Age: ${formikProps.values.Age};`,
                                            `Adress: ${formikProps.values.Adress};`,
                                            `Phone number: ${formikProps.values.Phone}`,
                                            `${products.forEach((item) => {
                                                console.log(item)
                                            })}`);
                                        dispatch(checkoutCartAction(localStorage.removeItem('cart')))
                                        dispatch(setProductsListAction(([])))
                                    }
                                }}>CHECKOUT
                    </button>

                </Form>
            }}
        </Formik>
    );
};

export default CreateForm;