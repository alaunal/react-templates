# React Templates
**React Templates** is a starter kit tool that makes it easy for developers, especially frontend web developers, to start their projects from scratch using the React Js library. This tool is already packed with plugins or other libraries which are generally used by React JavaScript developers.

## Features
The main features of the **React Templates** include:

1. **React starter kit**
	 - [CRA](https://create-react-app.dev/ "Create react app") (create-react-app)
2. **Routing and navigation**
	-   [React Router](https://github.com/ReactTraining/react-router "React Router")  a tool to manage root url pages
3. **Flux architecture**
	-   [Redux](https://redux.js.org/docs/introduction/ "Redux") a Predictable State Container for JS Apps
	-   Redux Wrapper: [Rematch](https://github.com/rematch/rematch "Rematch Js") is Redux best practices without the boilerplate
4. **UI Toolkit & Styling** 
	- [Twin.macro](https://github.com/ben-rogerson/twin.macro "https://github.com/ben-rogerson/twin.macro"), Twin blends the magic of Tailwind with the flexibility of css-in-js.
	- [Styled-components](https://styled-components.com/ "https://styled-components.com/"), Visual primitives for the component age
5. **Utilities and other tools**
	- [Axios](https://www.npmjs.com/package/axios "https://www.npmjs.com/package/axios"), Promise based HTTP client for the browser and node.js
	- [Lodash](https://lodash.com/ "https://lodash.com/"), A JavaScript utility library delivering consistency, modularity, performance, & extras.

## Requirements

This should be installed on your computer in order to get up and running:

- **[Node.js](https://nodejs.org/en/)** Required node version is >= `10.0.*`
- **[npm](https://www.npmjs.com/)** Version `6.0.*`

## Get Started
let's start using the React Starter project by following the steps below.

### installation & setup your project

1. **Clone Repo** Make sure you have a **React boilerplate** clone repository.
	```
	git clone https://github.com/alaunal/react-templates.git [project-name]
	```
2. **Setup git config**
	```
	// -- remove git config
	$ rm -rf .git

	// -- resetup git
	$ init git
	```
3. **Install dependencies**
	```
	npm install
	```
> If you have done the syntax above before, there is no need to do a step 3 process. but if you are not sure then just do it for check updated.

### Serve or deploy Project

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
