import * as yup from 'yup';

const schemas = yup.object().shape({
    FirstName: yup
        .string()
        .required('This field is required')
        .min(3, 'Min lenght is 3 simbol'),
    LastName: yup
        .string()
        .required('This field is required')
        .min(3, 'Min lenght is 3 simbol'),
    Age: yup
        .number('It must be number')
        .min(16, 'You are too young, access denied')
        .max(120, 'Please, enter correct value'),
    Adress: yup
        .string()
        .required('This field is required')
        .min(10, 'Min lenght is 10 simbol'),
    Phone: yup
        .number()
        .required('this field is required')
        .min(380000000000, "Number can consist of 13 numbers and started with 380")
        .max(381000000000, "Number can consist of 13 numbers and started with 380")

});

export default schemas