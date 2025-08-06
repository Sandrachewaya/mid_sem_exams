const values ={
    orderId : "ORD-2025-00456",
    customer : {
        ID : "CUST-1001",
        name : "Joe Doe",
        email : "joedoe@gmail.com"
    },
    address : {
        street : "45 indipendence drive",
        city : "Lilongwe",
        country : "Malawi",
        postcode : "265",
        },
    item : {
        product : [
            {
                productID : "P-001",
                productname : "wireless mouse",
                quantity : 2,
                price : 7500

            },
            {
                productID : "P-002",
                productname : "mechnanical keyboard",
                quantity : 1,
                price : 25500
            }
        ],
        payment : {
            method : "mobile money",
            phone : "0995783673",
            transactionalId : "TNX-99807545",
            success : "true"
        },
        delivery : {
            method : "courrier",
            status : "in transit",
            estimateddelivery : "2025-0810"

        },
        discountcode : [newuser,freeship],
        ordertotal : "40500",
        creditat : "2025-08-04t1a:25:00z",
        updateat : "2025-08-05T09:00:00z"
        
    }
};

class value{
    constructor(orderID,customer){
        this.orderID = orderID;
        this.customer = customer;

    }
} 
const valueclass = new value (ORD-444,"joe doe");

function value2(orderID,customer){
    this.orderID = orderID;
    this.customer = customer;

}
const value2function = new value2(ORD-765,"james doe");