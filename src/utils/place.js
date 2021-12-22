import GooglePlaceProvider from 'google-place-provider';
import axios from 'axios';

export default class PlaceAPI {

	async nearbySearch(lat, lng, radius) {
		var config = {
			method: 'get',
			url: `/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=${radius}&type=restaurant&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			headers: {}
		};

		return axios(config);
	}

	getPlaceDetail(placeId){
		var config = {
			method: 'get',
			url: `/maps/api/place/details/json?place_id=${placeId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			headers: { }
		  };
		  
		  return axios(config);
	}
}