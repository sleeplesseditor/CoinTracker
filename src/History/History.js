import React, { Component } from 'react';
import './History.css';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
    constructor(){
        super();
        this.state = {
            todayprice: {},
            yesterdayprice: {},
            twodaysprice: {},
            threedaysprice: {},
            fourdaysprice: {}
        }
        this.getBTCPrices = this.getBTCPrices.bind(this);
        this.getETHPrices = this.getETHPrices.bind(this);
        this.getLTCPrices = this.getLTCPrices.bind(this);
    }

    getBTCPrices(date){
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    }

    getETHPrices(date){
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    }

    getLTCPrices(date){
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }

    getTodayPrice(){
        let t = moment().unix();
        axios.all([this.getBTCPrices(t), this.getETHPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((btc, eth, ltc) => {
                let f = {
                    date: moment.unix(t).format('Do MMMM YYYY'),
                    btc: btc.data.BTC.USD,
                    eth: eth.data.ETH.USD,
                    ltc: ltc.data.LTC.USD,
                }
                this.setState({ todayprice: f });
            }));
    }

    getYesterdayPrice(){
        let t = moment().subtract(1, 'days').unix();
        axios.all([this.getBTCPrices(t), this.getETHPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((btc, eth, ltc) => {
                let f = {
                    date: moment.unix(t).format('Do MMMM YYYY'),
                    btc: btc.data.BTC.USD,
                    eth: eth.data.ETH.USD,
                    ltc: ltc.data.LTC.USD,
                }
                this.setState({ yesterdayprice: f });
            }));
    }

    getTwoDaysPrice(){
        let t = moment().subtract(2, 'days').unix();
        axios.all([this.getBTCPrices(t), this.getETHPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((btc, eth, ltc) => {
                let f = {
                    date: moment.unix(t).format('Do MMMM YYYY'),
                    btc: btc.data.BTC.USD,
                    eth: eth.data.ETH.USD,
                    ltc: ltc.data.LTC.USD,
                }
                this.setState({ twodaysprice: f });
            }));
    }

    getThreeDaysPrice(){
        let t = moment().subtract(3, 'days').unix();
        axios.all([this.getBTCPrices(t), this.getETHPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((btc, eth, ltc) => {
                let f = {
                    date: moment.unix(t).format('Do MMMM YYYY'),
                    btc: btc.data.BTC.USD,
                    eth: eth.data.ETH.USD,
                    ltc: ltc.data.LTC.USD,
                }
                this.setState({ threedaysprice: f });
            }));
    }

    getFourDaysPrice(){
        let t = moment().subtract(4, 'days').unix();
        axios.all([this.getBTCPrices(t), this.getETHPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((btc, eth, ltc) => {
                let f = {
                    date: moment.unix(t).format('Do MMMM YYYY'),
                    btc: btc.data.BTC.USD,
                    eth: eth.data.ETH.USD,
                    ltc: ltc.data.LTC.USD,
                }
                this.setState({ fourdaysprice: f });
            }));
    }

    componentWillMount(){
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }

    render() {
        return (
            <div>
                History
            </div>
        )
    }
}

export default History;