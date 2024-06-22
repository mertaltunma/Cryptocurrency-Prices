import express from 'express';
import axios from 'axios';

const app = express();
const port=3000;
const API_URL="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Csolana%2Ccardano&vs_currencies=usd";

app.use(express.static("public"));

app.get('/', async(req, res) => {
    try {
        const result= await axios.get(API_URL);
        res.render('index.ejs',{
            bitcoin:result.data.bitcoin.usd,
            litecoin:result.data.litecoin.usd,
            ethereum:result.data.ethereum.usd,
            dogecoin:result.data.dogecoin.usd,
            solana:result.data.solana.usd,
            cardano:result.data.cardano.usd
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
}); 

app.listen(port,()=>{
    console.log(`Listenning on port ${port}`);
});