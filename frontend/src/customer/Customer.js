import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Customer.css';
import CustomerService from './CustomerService';



const Customer = () => {

    const [customers,  setCustomers] = useState([]);


    // get all customer
    useEffect(()=>{
        CustomerService.getCustomers().then(
            (res) => {
                setCustomers(res.data.customers);
                return customers;
            }
        )
    },[]);


    // delete customer
    const deleteCustomer = (id) =>
    {
       
        CustomerService.deleteCustomerById(id).then(
            (res) => window.location.reload()
        )
    }

    return (
        <div>
            <h2 className='title'>Gestion client (CRUD)</h2>

            <Link to ='' ></Link>
            <div className="row global">
                    <div className="table-wrapper">
                        <div className="col-8 mx-auto">
                                <div className="row justify-content-between container-fluid searchAndAdd">
                                    <div className="col-6 search">
                                        <form>
                                        <input id="exampleFormControlInput5" type="email" placeholder="Rechercher" className="form-control form-control-underlined" />
                                        </form>
                                    </div>
                                    <div className="col-5">
                                        <button type="submit" className="btn btn-success btnAdd">
                                            <Link className='customlink' to="addEditCustomer">
                                                Ajouter client
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                
                            <table className="table table-striped table-hover customTable">
                            <thead>
                                <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                    Nom
                                </th>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                    Email
                                </th>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                    Phone
                                </th>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                    Status
                                </th>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                    Actions
                                </th>
                                </tr>
                            </thead>
                            <tbody>

                               
                                    {
                                        customers?.map((customer) =>(
                                        <tr customer = {customer.id}>
                                            <>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                                        <label htmlFor="checkbox1"></label>
                                                    </span>
                                                    {customer.name}
                                                </td>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                                        <label htmlFor="checkbox1"></label>
                                                    </span>
                                                    {customer.email}
                                                </td>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                                        <label htmlFor="checkbox1"></label>
                                                    </span>
                                                    {customer.phone}
                                                </td>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                                        <label htmlFor="checkbox1"></label>
                                                    </span>
                                                    {customer.status}
                                                </td>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" className='customcheckbox' name="name[]" value="1" />
                                                        <label htmlFor="checkbox1"></label>
                                                    </span>
                                                    <Link className='customlinkModif' to={'/AddEditCustomer/'+customer._id}>Modifier</Link> | <span className='delete' onClick={() => deleteCustomer(customer._id)}>Supprimer</span>
                                                </td>
                                                </>
                                            </tr>
                                            
                                        ))
                                        
                                    }
                                
                            </tbody>
                            </table>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Customer;