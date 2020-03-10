import React, { Component } from "react";

class Hello extends Component {
    constructor() {
        super();
        this.state = {
            inputDataName: "",
            inputDataEmail: "",
            inputDataAddress: "",

            tableDataArray: []
        };
    }

    handleAddDataButtonClicked = e => {
        this.setState({
            name: this.state.inputDataName,
            email: this.state.inputDataEmail,
            address: this.state.inputDataAddress
        });

        const newRowData = {
            name: this.state.inputDataName,
            email: this.state.inputDataEmail,
            address: this.state.inputDataAddress
        };

        this.setState({
            tableDataArray: [...this.state.tableDataArray, newRowData]
        });
    };

    handleNameChange = e => {
        this.setState({ inputDataName: e.target.value });
    };
    handleEmailChange = e => {
        this.setState({ inputDataEmail: e.target.value });
    };
    handleAddressChange = e => {
        this.setState({ inputDataAddress: e.target.value });
    };
    handleSelectSubmit = e => {
       this.setState({tableDataArray: [...this.state.tableDataArray, {"name":this.state.inputDataName,"email":this.state.inputDataEmail,"address":this.state.inputDataAddress}]})    
    };

    render() {
        console.log(this.state.tableDataArray);
        return (
            <div>
                <div>I am from Hello.js</div>
                <hr />
                <div align="left" style={{ padding: 10 }}>
                    <div>Name:</div>
                    <input
                        type="text"
                        placeholder="name"
                        onChange={e => this.handleNameChange(e)}
                        value={this.state.inputDataName}
                    />
                </div>
                <div align="left" style={{ padding: 10 }}>
                    <div>Email:</div>
                    <input
                        type="email"
                        placeholder="email"
                        onChange={e => this.handleEmailChange(e)}
                        value={this.state.inputDataEmail}
                    />
                </div>
                <div align="left" style={{ padding: 10 }}>
                    <div>Address:</div>
                    <input
                        type="text"
                        placeholder="address"
                        value={this.state.inputDataAddress}
                        onChange={e => this.handleAddressChange(e)}
                    />
                </div>
                <div align="left" style={{ padding: 10 }}>
                    <button onClick={this.handleSelectSubmit}>Add Data</button>
                    <button onClick={""}>RESET</button>
                </div>
                <hr />

                <div style={{ padding: 20 }}>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#88888822" }}>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tableDataArray.map((value, key) => (
                                <tr style={{ backgroundColor: "#88888811" }}>
                                    <td>{key + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export class HelloForm extends Component {
    render() {
        return <div className="bg-blue font-italic">Data Table</div>;
    }
}

export default Hello;

// import React, { useState } from "react";

// const AddData = () => {
//   const [name, setName] = useState("");

//   const handleChange = e => {
//     setName(e.target.value)
//   };

//   return (
//     <div className="container">
//       <form>
//         <h3 className="app-header">Check List</h3>
//         <div>
//           <label className="container">First Name</label>
//           <input className="form-control" type="text" placeholder="" />
//         </div>
//         <div>
//           <label className="container-fluid">Second Name</label>
//           <input className="form-control" type="text" />
//         </div>
//         <label className="container-fluid">Position</label>
//         <input type="text" class="form-control" placeholder="" />
//       </form>
//       <div className="container-fluid">
//         <button type="button" class="btn btn-outline-primary btn-sm">
//           Add
//         </button>
//         <button
//           type="Clear"
//           class="btn btn-outline-primary btn-sm justify-content-end"
//           style={{ float: "right" }}
//         >
//           Clear
//         </button>
//       </div>
//       <h3>List View</h3>
//       <p>Data above you type will be appear in this List View.</p>
//       <table class="table table-bordered">
//         <thead>
//           <tr>
//             <th>SINO</th>
//             <th>First Name</th>
//             <th>Second Name</th>
//             <th>Position</th>
//           </tr>
//           {/* <tbody>
//                 <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                 </tr>
//             </tbody> */}
//         </thead>
//       </table>
//     </div>
//   );
// };
// export default AddData;

// class MyForm extends React.Component{
//     render(){
//         return(
//             <div className="container">
//                 <form>
//                     <h3 className="container-fluid">Check List</h3>
//                     <div>
//                             <label className="container">First Name</label>
//                             <input className="form-control" type="text" placeholder=""/>
//                     </div>
//                     <div>
//                         <label className="container-fluid">Second Name</label>
//                             <input className="form-control" type="text" />
//                     </div>
//                         <label className="container-fluid">Position</label>
//                             <input type="text" class="form-control" placeholder=""/>
//                 </form>
//                 <div className="justify-content-between">
//                             <button type="button" class="btn btn-outline-primary btn-sm">Add</button>
//                             <button type="Clear" class="btn btn-outline-primary btn-sm justify-content-end" style={{float: 'right'}}>Clear</button>
//                 </div>
//                 <h3>List View</h3>
//                     <p>Data above you type will be appear in this List View.</p>
//                 <table class="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>SINO</th>
//                             <th>First Name</th>
//                             <th>Second Name</th>
//                             <th>Position</th>
//                         </tr>
//                             {/* <tbody>
//                                 <tr>
//                                     <td></td>
//                                     <td></td>
//                                     <td></td>
//                                     <td></td>
//                                 </tr>
//                             </tbody> */}
//                     </thead>
//                 </table>
//             </div>

//         );
//     }
// }

// export default MyForm;
