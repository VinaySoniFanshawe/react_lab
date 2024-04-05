export default class Transaction {
    constructor(storeName, amount, location, date){
        this.id = null
        this.storeName = storeName
        this.amount = amount
        this.location = location
        this.date = date
    }

    static fromJson(id, data) {
        var transaction = new Transaction(data.storeName, data.amount, data.location, data.date);
        transaction.id = id
        return transaction 
    }

    toJson(){
        return {
            storeName : this.storeName,
            amount : this.amount,
            location : this.location,
            date : this.date
        }
    }
}