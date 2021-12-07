import GooglePlaceProvider from 'google-place-provider';
import axios from 'axios';

export default class PlaceAPI {

	nearbySearch(lat, lng, radius) {
		var config = {
			method: 'get',
			url: `/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=${radius}&type=restaurant&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			headers: {}
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getPlaceDetail(placeId){
		var config = {
			method: 'get',
			url: `/maps/api/place/details/json?place_id=${placeId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			headers: { }
		  };
		  
		  axios(config)
		  .then(function (response) {
			console.log(JSON.stringify(response.data));
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
}