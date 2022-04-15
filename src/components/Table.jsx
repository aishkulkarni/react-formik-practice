import React, { useEffect } from 'react';
// import RenderSearch from '../common/search/search';
// import { createFilter } from 'react-search-input';
import Form from './form'





export default function Table(props) {
    // const initState = props.location.state;
    // let data = JSON.parse(localStorage.getItem('initState'));

    // const [state, setState] = React.useState(initState);
    // const [filteredData, setFilteredData] = React.useState([]);


    // const searchUpdated = (event) => {
    //   const key = event.target.value;
    //   const filterData = initState.filter(createFilter(key, ['name']));
    //   setFilteredData(filterData);
    // };

    // <RenderSearch searchUpdated={searchUpdated} label="Search menu Item" />

//   useEffect((state) => {
//   setState([state]) 
// }, []);
// console.log('state',state)
    console.log('props',props.data);
      return (
          <div className="container pt-5">
            {/* <div>
              <Form data={state}/>
            </div> */}

              <div className="row">
        <table className="table table-bordered">
            {/* <thead>
            <tr key={"header"}>
            {Object.keys(props.data[0]).map((key) => (
              <th scope='col'>{key}</th>
            ))}
          </tr>
   </thead> */}
   <thead>
     <tr>
       <th>Name</th>
       <th>Email</th>
       <th>adress</th>
       <th>Phone_no</th>
       <th>Gender</th>
     </tr>
   </thead>
   <tbody>
     {props && props.data && props.data.map((item, index) => {
      console.log('item', item, item.Name)
      return (
        <tr key={index}>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.address}</td>
          <td>{item.phone_no}</td>
          <td>{item.Gender}</td>
        </tr>       
      )
})} 
         
          {/* {props.data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))} */}
          </tbody>
        </table>
        </div>
        </div>
      );
    }
//     const data= props.location ? props.location.state : null;
//     console.log('data',data);
//     console.log(props.location.state.map((x)=> x.Name))
//   return (
//     <div>
//       <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Address</th>
//       <th scope="col">Data</th>
//     </tr>
//   </thead>
//   <tbody>
//       {/* {props.location.state.map((x)=>{ */}
//     <tr>
//       <th scope="row">1</th>
//       <td>{data.Name}</td>
//       <td>{data.address}</td>
//       <td>{data.data}</td>
//     </tr>
//     {/* })} */}
//     {/* <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr> */}
//   </tbody>
// </table>
//     </div>
//   )

