import { initializeApp } from 'firebase/app';
import { getFirestore,  addDoc, collection, getDocs } from "firebase/firestore";
import Transaction from "./transaction_model";

const dataList = [
    new Transaction(1,"Bombay Bistro", 30.00, "117 Dundas St, London", "Jan 1, 2024"),
    new Transaction(2,"Walmart", 140.00, "Argyle Mall, London", "Jan 10, 2024"),
    new Transaction(3,"NoFrills", 90.00, "Argyle Mall, London", "Jan 10, 2024"),
    new Transaction(4,"Royal Paan", 20.00, "117 Oxford St, London", "Jan 15, 2024"),
    new Transaction(5,"Nike", 190.00, "240 Clark Rd, London", "Jan 26, 2024"),
    new Transaction(6,"Puma", 200.00, "260 Clark Rd, London", "Jan 26, 2024"),
    new Transaction(7,"Tim Hortons", 4.00, "Fanshawe College, London", "Feb 1, 2024"),
    new Transaction(8,"Subway", 9.00, "Fanshawe College, London", "Feb 1, 2024"),
    new Transaction(9,"Starbucks", 14.00, "Fanshawe College, London", "Feb 8, 2024"),
    new Transaction(10,"Food Basics", 130.00, "1123 Oxford St, London", "Feb 18, 2024"),
]

export default dataList; 

class DBOperations {
    collectionName = "transaction"
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyC5qV756ZCIPUfbNxZWkGTW0uaPlHndhAQ",
            authDomain: "cross-platform-lab-d9201.firebaseapp.com",
            projectId: "cross-platform-lab-d9201",
            storageBucket: "cross-platform-lab-d9201.appspot.com",
            messagingSenderId: "662396511992",
            appId: "1:662396511992:web:84a3cae8597a39f9b8bd0d"
          };
          
          this.app = initializeApp(this.firebaseConfig);
          this.db = getFirestore(this.app)
    }

    async getTransaction() {
        var transaction_list = []
        try {
            const snapshot = await getDocs(collection(this.db, this.collectionName))
            snapshot.forEach((doc) => {
                transaction_list.push(Transaction.fromJson(doc.id, doc.data()))
            })
        }catch(error){
            console.log("Error occured : getTransaction() => ", error)
        }finally{
            return transaction_list
        }
    }

    async addTransaction(transaction) {
        try{
            const docRef = await addDoc(collection(this.db, this.collectionName), transaction.toJson());
            transaction.id = docRef.id
            return transaction;
        }catch(error){
            console.log("Error occured : addTransaction() => ", error)
        }
    }

    async pushBulkData(){
        try{
            dataList.forEach(async (transaction) => {
                await addDoc(collection(this.db, this.collectionName), transaction.toJson())
            })
            console.log("Data Pushed")
        }catch(error){
            console.log("Error occured : addTransaction() => ", error)
        }
    }
}

const DB = new DBOperations()

export { DB }

 