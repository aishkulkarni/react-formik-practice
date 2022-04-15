// import React from 'react'
// import { Formik, Form, FieldArray } from 'formik';
// import CheckBox from '../common/checkbox/checkbox';
// import Textfield from '../common/TextFeid/TextFeild';



// const Example = () => {
// const initialData = {
//   items : [{name : '', email: ''}]
// };
// const onSubmit = (data) => {
//     console.log('data', data);
// }
//     const  renderform = () => {
//         return (
//             <Form>
//              <FieldArray
//             name="items"
//             render={(data) => {
//               console.log('helpers', data);
//               {data && data.form && data.form.items && data.form.items.map((item, index) => {
//                 return (
//                   <div className="col-12 col-md-6 p-0">
//                     <div className="card m-2 p-10 flex-row">
//                       <div className="col-10 fs-16">
//                         data
//                       </div>
//                       <div className="col-2 d-flex align-items-center justify-content-center text-right">
//                       <Textfield
//                   className="form-control"
//                   name={`items[${index}.name]`}
//                   type="text"
//                 />
//                       </div>
//                       <div className="col-2 d-flex align-items-center justify-content-center text-right">
//                 <label htmlFor="key">Name</label>
//                 <Textfield
//                   className="form-control"
//                   name={`items[${index}.email]`}
//                   type="text"
//                 />
//               </div>
//                     </div>
//                   </div>
//           );
//               })}
//             }}
//           />
//             </Form>
//         )
//     }
//     return (
//         <div>
//           <div className="row m-0">
//             <div className="col-12">
//               <Formik
//                 initialValues={initialData}
//                 render={formProps => renderform(formProps)}
//                 // validationSchema={validationSchema}
//                 onSubmit={onSubmit}
//                 enableReinitialize
//               />
//             </div>
//           </div>
//         </div>
//       );
// }
// export default Example;
import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: [] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default FriendList;