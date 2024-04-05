import { useEffect } from "react";
import Finance_model from "../Database/Finance_model";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTransaction, updateValues } from "../Redux/financeActions";
import { DB } from "../Database/data";

function AppLoader({ setTransaction, updateValues }) {
    useEffect(() => {
        const init = async () => {
            const list = await DB.getTransaction()
            setTransaction(list)
            updateValues()
        } 
        init()
    }, [setTransaction, updateValues])

    return null
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTransaction,
    updateValues
}, dispatch);

export default connect(null, mapDispatchToProps)(AppLoader);