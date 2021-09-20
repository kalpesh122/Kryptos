import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'c7a360b1ccmshfc42c7f04319f0dp1d17acjsn64bc173435be'

}

const baseURL = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:baseURL}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})


export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi


// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': 'c7a360b1ccmshfc42c7f04319f0dp1d17acjsn64bc173435be'
//   }
// };
