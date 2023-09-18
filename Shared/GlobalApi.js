const { default: axios } = require("axios");

const getGooglePlace=(category,radius,lat,lng)=>axios.get('/api/google-place?'+
'category='+category+'&radius='+radius+'&lat='+lat+'&lng='+lng)

const getGooglePlaceDetail = ( placeId ) => axios.get('/api/google-place-detail?placeId='+placeId)
export default{
    getGooglePlace, getGooglePlaceDetail
}
