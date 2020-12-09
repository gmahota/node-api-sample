import Customer from '../models/Customer'

export default {
    render(customer: Customer) {
      return {
        id: customer.id,
        name: customer.name,
        address: customer.address,
        vat: customer.vat
      };
    },
    renderMany(customers: Customer[]) {
      return customers.map(customer =>this.render(customer));
    },
  };
  