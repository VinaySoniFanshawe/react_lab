export default class Transaction {
    constructor(id, storeName, amount, location, date){
        this.id = id
        this.storeName = storeName
        this.amount = amount
        this.location = location
        this.date = date
    }
}