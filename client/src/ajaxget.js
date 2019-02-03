import $ from 'jquery'

var getData = (ch) => {
	$.get("/repos", data => {
		ch(null, data);
	})
}

export default getData;