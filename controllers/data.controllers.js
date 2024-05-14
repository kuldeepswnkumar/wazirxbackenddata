import { WazirxModel } from "../model/data.models.js";
import axios from 'axios'




const StoreData = async (req, res) => {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        let record = Object.keys(response['data']);
        record = record.slice(0, 10)
        let wazirx = [];
        record.map((val) => {
            let temp = {
                'name': response['data'][val]['name'],
                'last': response['data'][val]['last'],
                'buy': response['data'][val]['buy'],
                'sell': response['data'][val]['sell'],
                'volume': response['data'][val]['volume'],
                'base_unit': response['data'][val]['base_unit']
            }
            wazirx.push(temp)
        })


        const allData = await WazirxModel.create(wazirx)


        return res.status(200).send({ allData, Message: 'Data Added Successfully!' });
    } catch (error) {
        return res.status(500).send({ error: 'An error occurred while fetching and storing data.' });
    }
    // return res.send(allData, "Data Added Successfully!!")
}

const WazirXRecord = async (req, res) => {
    try {
        const record = await WazirxModel.find();
        return res.status(200).send({ record, Message: 'Data Retrive Successfully!' });
    } catch (error) {
        return res.status(500).send({ error: 'An error occurred while fetching and storing data.' });
    }
}


export { StoreData, WazirXRecord }

