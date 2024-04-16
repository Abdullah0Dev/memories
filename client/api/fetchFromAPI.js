const axios = require('axios');

const data = {
	"title": "Hi ther3e2",
	"image": "Hi there2",
	"desc": "Hi th2e2re"
};
export const addPost = () => {
	axios.post('http://localhost:4000/api/memories/', data, {
		withCredentials: true,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

export const getAllMemories = () => {
	axios.get('http://localhost:4000/api/memories/', {
	  withCredentials: true,
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  }
	})
	.then(response => {
	  console.log(response.data);
	})
	.catch(error => {
	  console.error('Error:', error);
	});
  }