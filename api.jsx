"use client"
const axios =require("axios");
const {getAuthTokenClient}=require("./cokie");

const  auth =getAuthTokenClient()
const  url =proces.env.NEXT_PUBLIC_URL;
const instance= axios.create({
    baseURL:url,
});
instance.defaults.headers.common["Authorization"]="Bearer"+auth

module.exports={instance};
