import React from "react";

function article_1() {
	return {
		link: "https://medium.com/@bluedesk09/sending-email-with-zoho-nodejs-nodemailer-62de7fffc8ac",
		date: "Aug 28, 2020",
		title: "Sending Email with Zoho, NodeJS & Nodemailer",
		description:
			"Zoho is a reliable and secure email hosting service. They offer one free domain e-mail and are therefore a popular chose for people looking for an email service for their domain.",
	};
}

function article_2() {
	return {
		link: "https://medium.com/@bluedesk09/5-tips-for-preventing-cross-site-scripting-xss-vulnerabilities-in-asp-net-web-applications-5589d0ec69b6",
		date: "Feb 4, 2019",
		title: "5 Tips for Preventing Cross-Site Scripting (XSS) Vulnerabilities in ASP.NET Web Applications",
		description:
			"This article will briefly discuss a notorious vulnerability known as cross-site scripting (XSS) and provide 5 tips to help you prevent it in your ASP.NET Web Application.",
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
