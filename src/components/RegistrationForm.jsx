import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Box } from '@mui/material';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Ism kamida 3 harf bo‘lishi kerak!')
        .required('Ism kiritish majburiy!'),
    email: Yup.string()
        .email('Email noto‘g‘ri formatda!')
        .required('Email kiritish majburiy!'),
    password: Yup.string()
        .test(
            'min-length',
            'Parol kamida 8 belgidan iborat bo‘lishi kerak!',
            (value) => value && value.length >= 8
        )


        .required('Parol kiritish majburiy!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Parollar bir xil bo‘lishi kerak!')
        .required('Parolni tasdiqlash majburiy!'),
});

const RegistrationForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form ma’lumotlari:', values);
        resetForm();
        alert('Forma muvaffaqiyatli yuborildi!');
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Ro‘yxatdan o‘tish
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box sx={{ mb: 2 }}>
                            <Field
                                as={TextField}
                                name="name"
                                label="Ism"
                                variant="outlined"
                                fullWidth
                                error={touched.name && Boolean(errors.name)}
                                helperText={<ErrorMessage name="name" />}
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                error={touched.email && Boolean(errors.email)}
                                helperText={<ErrorMessage name="email" />}
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                as={TextField}
                                name="password"
                                type="password"
                                label="Parol"
                                variant="outlined"
                                fullWidth
                                error={touched.password && Boolean(errors.password)}
                                helperText={<ErrorMessage name="password" />}
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                as={TextField}
                                name="confirmPassword"
                                type="password"
                                label="Parolni tasdiqlash"
                                variant="outlined"
                                fullWidth
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={<ErrorMessage name="confirmPassword" />}
                            />
                        </Box>

                        <Button type="submit" variant="contained" fullWidth>
                            Yuborish
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default RegistrationForm;
