// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Form, useField } from 'formik';
// import * as Yup from 'yup';
// // import Toggle from '../common/Toggle/Toggle';
// import { Link } from 'react-router-dom';


// const MyTextInput = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const MyCheckbox = ({ children, ...props }) => {
//   // React treats radios and checkbox inputs differently other input types, select, and textarea.
//   // Formik does this too! When you specify `type` to useField(), it will
//   // return the correct bag of props for you -- a `checked` prop will be included
//   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
//   const [field, meta] = useField({ ...props, type: 'checkbox' });
//   return (
//     <div>
//       <label className="checkbox-input">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// // const MyRadioButton = ({ children, ...props }) => {
// //     console.log('checkbox',props)
// //   // React treats radios and checkbox inputs differently other input types, select, and textarea.
// //   // Formik does this too! When you specify `type` to useField(), it will
// //   // return the correct bag of props for you -- a `checked` prop will be included
// //   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
// //   const [field, meta] = useField({ ...props, type: 'radio' });
// //   return (
// //     <div>
// //       <label className="radio-input">
// //         <input type="radio" {...field} {...props} />
// //         {children}
// //       </label>
// //       {meta.touched && meta.error ? (
// //         <div className="error">{meta.error}</div>
// //       ) : null}
// //     </div>
// //   );
// // };

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <select {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// // const defaultOptions= [
// //     { label: 'Menu', value: 'menu' },
// //     { label: 'Modifier', value: 'modifier' },
// //   ],

//  const table=(data)=>{
//      console.log('data',data);
//      <table class="table">
//      <thead>
//        <tr>
//          <th scope="col">#</th>
//          <th scope="col">First</th>
//          <th scope="col">Last</th>
//          <th scope="col">Handle</th>
//        </tr>
//      </thead>
//      <tbody>
//        <tr>
//          <th scope="row">1</th>
//          <td>{data.firstName}</td>
//          <td>{data.lastname}</td>
//          <td>{data.email}</td>
//        </tr>
//        <tr>
//          <th scope="row">2</th>
//          <td>Jacob</td>
//          <td>Thornton</td>
//          <td>@fat</td>
//        </tr>
//        <tr>
//          <th scope="row">3</th>
//          <td colspan="2">Larry the Bird</td>
//          <td>@twitter</td>
//        </tr>
//      </tbody>
//    </table>

//    return table

//  }

// // And now we can use these
// const SignupForm = () => {
//   return (
    
//     <>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//           acceptedTerms: false, // added for our checkbox
//           jobType: '', // added for our select
//         }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//           lastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Required'),
//           acceptedTerms: Yup.boolean()
//             .required('Required')
//             .oneOf([true], 'You must accept the terms and conditions.'),
//           jobType: Yup.string()
//             .oneOf(
//               ['designer', 'development', 'product', 'other'],
//               'Invalid Job Type'
//             )
//             .required('Required'),
//         })}
//         onSubmit={values => table(values)}
//       >
//         <Form>
//         <div className="container">
//      <div className="row p-0 m-0">
//          <div className="col-12 col-md-2 form-group">
//           <MyTextInput
//             label="First Name"
//             name="firstName"
//             type="text"
//             placeholder="Jane"
//           />
//          </div>
//          <div className="col-md-3">
//           <MyTextInput
//             label="Last Name"
//             name="lastName"
//             type="text"
//             placeholder="Doe"
//           />
//           </div>
//           <MyTextInput
//             label="Email Address"
//             name="email"
//             type="email"
//             placeholder="jane@formik.com"
//           />

//           <MySelect label="Job Type" name="jobType">
//             <option value="">Select a job type</option>
//             <option value="designer">Designer</option>
//             <option value="development">Developer</option>
//             <option value="product">Product Manager</option>
//             <option value="other">Other</option>
//           </MySelect>

//           <MyCheckbox name="acceptedTerms">
//             I accept the terms and conditions
//           </MyCheckbox>

//           <button  className="btn btn-success" type="submit">Submit</button>
//           </div>
//     </div>
//         </Form>
//       </Formik>
//     </>
 

//   );
// };

// export default SignupForm;

import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
import Textfield from '../common/TextFeid/TextFeild';
import TextArea from '../common/Textarea/textarea';
import Select from '../common/select/select';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from '../common/RedioButton/rediobutton';
import CheckBox from '../common/checkbox/checkbox';
import Table from './Table';
// import Button from '../common/Button/Button';


const EmpForm = (props) => {

  // const validationForm = () => (
  //   Yup.object().shape({
  //     Name: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),      
  //     Email: Yup.string().email().required('Email is required'),
  //   })
  // );
  const [state, setState] = React.useState([]);

  const validationSchema = Yup.object({
    Name: Yup.string().required('Required'),
    Email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
      address: Yup.string().required('Address is Required'),
      phone_no: Yup.string().required('Phone nu is required')
  })
  

  const onSubmit = (data) => {
      console.log('data',data);
      setState('');
      state.push({
        ...data, 
        Name:data.Name,
        Email: data.Email,
        address: data.address,
        Gender: data.Gender,
        phone_no: data.phone_no,

      })
      setState(state)
    // localStorage.setItem('data', JSON.stringify(data));
    // props.history.push('/table' , [data]);
    // props.history.push('/table', data={state});

  };

  const initialData = {
    Name: '',
    Email: '',
    address: '',
    Gender: '',
    phone_no: '',


  };
  const defaultOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];


  const renderForm = () => {
    console.log('formprops');

    return (
      <Form>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="fs-16 fw-600 align-items-center text-center form-group pt-20">
                Form
            </div>
          </div>
          <div className="col-12 col-md-6 offset-md-3">
          <div className="form-group">
                <label htmlFor="key">Name</label>
                <Textfield
                  className="form-control"
                  name="Name"
                  type="text"
                />
              </div>
          </div>
          <div className="col-sm-12 col-md-6 offset-md-3">
          <div className="form-group">
                <label htmlFor="key">Email</label>
                <Textfield
                  className="form-control"
                  name="Email"
                  type="text"
                />
              </div>
          </div>
          <div className="col-sm-12 col-md-6 offset-md-3">
          <div className="form-group">
                <label htmlFor="key">Phone no</label>
                <Textfield
                  className="form-control"
                  name="phone_no"
                  type="number"
                />
              </div>
          </div>
          <div className="col-sm-12 col-md-6 offset-md-3 ">
          <div className="form-group">
          <label htmlFor="lastName">Address</label>
          <TextArea
          className="form-control"
          name="address"
          type="text"
          label="Address"
          />
              </div>
          </div>
          <div className="col-sm-12 col-md-6 offset-md-3 ">
          <div className="form-group">
                  <label htmlFor="data">Select</label>
                  <Select
                    className="form-control"
                    name="data"
                    label="Choose data"
                    options={[{ name: 'Option1', value: 'Option1' }, { name: 'Option2', value: 'Option2' }, { name: 'Option3', value: 'Option3' }]}
                  />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 offset-md-3 ">
            <div className="form-group">
                  <label htmlFor="data">Select your gender</label>
                  <RadioGroup
                    options={defaultOptions}
                    name="Gender"
                      />
                </div>
                </div>
                {/* <div className="col-sm-12 col-md-6 offset-md-3 ">
            <div className="form-group">
                  <label htmlFor="data">Check it</label>
                  <CheckBox
            label='Terms Accepted'
            name="accept"
          />
                </div>
                </div> */}
            <div className="row ml-20 mr-20">
              <div className="col-12 form-group d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">
                  <Fragment>Save</Fragment>
                </button>
              </div>
          </div>
        </div>
      </Form>
    );
  };
  

  return (

    <div>
      <div className="row m-0">
        <div className="col-12">
          <Formik
            initialValues={initialData}
            render={formProps => renderForm(formProps)}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          />
        {state && <Table data={state}/>}
        </div>
      </div>
    </div>
  );
};


export default EmpForm;
