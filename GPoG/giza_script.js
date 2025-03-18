// Class to store result data
class Feedback {
	constructor(f_name, l_name, date, feedback) {
		this.f_name = f_name;
		this.l_name = l_name;
		this.date = date;
		this.feedback = feedback;
	}
}

function update_html_content(current_content, feedback_obj) {
	let result = "";
	if (current_content == "<p>No feedback yet!<p>") {
		result = "<p>"+ feedback_obj.f_name + " " + feedback_obj.l_name + " visited on " + feedback_obj.date + " and said: <br>" + feedback_obj.feedback + "</p>";
	} else {
		result = current_content + "<p>"+ feedback_obj.f_name + " " + feedback_obj.l_name + " visited on " + feedback_obj.date + " and said: <br>" + feedback_obj.feedback + "</p>";
	}
	return result;
}

document.addEventListener("DOMContentLoaded", function() {
	const fback_form = document.getElementById("giza_visit_form");
	const feedback_box = document.getElementById("feedback_holder");
	let html_content = "<p>No feedback yet!<p>";
	feedback_box.innerHTML = html_content;
	let all_feedbacks = [];

	fback_form.addEventListener("submit", function(e) {
		console.log("SUBMITTED");
		e.preventDefault();

		// Populate the data array
		let f_back_res = ["GIZA"];
		for (let i = 0; i < 4; i++) {
			f_back_res.push(fback_form.elements.item(i).value);
		}

		// Store the result
		alert("Thank you for submitting feedback!");
		let GIZA_fb_obj = new Feedback(f_back_res[1], f_back_res[2], f_back_res[3], f_back_res[4]);
		all_feedbacks.push(GIZA_fb_obj);

		// Add to the feedback list
		html_content = update_html_content(html_content, GIZA_fb_obj);
		feedback_box.innerHTML = html_content;
		console.log(html_content);
	});
});