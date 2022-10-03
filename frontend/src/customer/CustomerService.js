import axios from "axios"


const API_URL = "http://localhost:4000/api/v1/customers";

export const postCustomer = (data) => {

    return axios.post(API_URL+"/add", data).then(
        (response) => {
            return response.data;
        }
    );
};

export const getCustomers = () => {
    return axios.get(API_URL)
};


export const getCustomerById = (id) => {
    return axios.get(API_URL+"/"+id)
};


export const updateCustomerById = (id, data) => {
    return axios.put(API_URL+"/"+id , data)
};


export const deleteCustomerById = (id) => {
    return axios.delete(API_URL+"/"+id)
};


const CustomerService = {
    postCustomer,
    getCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById
}

export default CustomerService;

