

Description:

	Currently the "Face Analysis" web site provides the following functionalities
	(1) Authentication using username and image
		(a) Sign up
			A new user can click this link
			
			If there is existing user already in the system,
				then the system will display an error message
					indicating to try with another name
			
		(b) Sign in
			Existing user can use this link

	(2) Listing the user basic data

	(3) Listing the user images stored in each login

Technologies used:
	Languages:
		html,
		css,
		javascript/jquery,
	Node js modules: express, 
			body-parser,
			path,
			skybiometry,
			fs,
			express-handlebars,
			multer
	Database: mysql, 
			skybiometry client

Usage:

   to see the web site
	start the node server from command line using the command "node server.js"

	use the below in a browser
		http://localhost:3000/
   to see the user picture data


	Sample link to see user list in browser
		http://localhost:3000/users/list

	Sample link to see user details/picture link in browser
		http://localhost:3000/user/details/raji

