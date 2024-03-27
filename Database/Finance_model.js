import dataList from "./data";

class Finance {
    max = null
    min = null
    total = 0
    constructor() {
        this.data = dataList
        this.count = dataList.length ?? 0
        this.findMax()
        this.findMin()
        this.findTotal()
    }

    findMax() {
        if(this.count == 0){
            return
        }
        this.max = this.data.reduce(function(prev, curr) {
            return prev.amount > curr.amount ? prev : curr;
        });
    }

    findMin() {
        if(this.count == 0){
            return
        }
        this.min = this.data.reduce(function(prev, curr) {
            return prev.amount < curr.amount ? prev : curr;
        });
    }

    findTotal() {
        this.total = 0
        this.data.forEach((transaction) => {this.total += transaction.amount})
    }

    findById(id) {
        return this.data.find((transaction) => transaction.id == id)
    }


}

export default new Finance();