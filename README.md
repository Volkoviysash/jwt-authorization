<h1>JWT Authorization Example</h1>

<p>Welcome to the JWT Authorization example repository! This repository demonstrates a simple implementation of JWT (JSON Web Token) authorization using a client-server architecture. It includes a <code>client</code> folder, which contains a React application built with MobX and Tailwind CSS, and a <code>server</code> folder, which includes a Node.js Express server using router and Axios.</p>

<h2 id="introduction">Introduction</h2>

<p>This repository provides a basic implementation of JWT authorization. JWTs are used for secure authentication and authorization in web applications. In this example, users can register their accounts and verify them via email. Once authenticated, users are issued access and refresh tokens, which are stored in local storage and cookies, respectively. When the access token expires, a request is made to the server using the refresh token to obtain new tokens.</p>

<p>The <code>client</code> folder contains a React application that interacts with the server API, allowing authorized users to perform actions such as retrieving a list of registered user nicknames. Unauthorized users are restricted from accessing this information.</p>

<p>The <code>server</code> folder contains a Node.js Express server that handles user registration, authentication, and authorization. It utilizes the router module for defining routes and Axios for making HTTP requests.</p>

<h2 id="features">Features</h2>

<ul>
  <li>User registration with email verification</li>
  <li>JWT-based authentication and authorization</li>
  <li>Secure storage of access token in local storage</li>
  <li>Secure storage of refresh token in cookies</li>
  <li>Automatic token refresh on access token expiration</li>
  <li>Retrieval of registered user nicknames for authorized users</li>
  <li>MongoDB was used as the database</li>  
</ul>

<h2 id="screenshots">Screenshots</h2>

<p>Login form:</p>
<img src='https://github.com/Volkoviysash/jwt-authorization/assets/90283311/7d0ec856-5a60-4122-b470-a7883b890a37' alt="Login form"/>
<p>Here you can log in or register, when registering you must go to and accept your account using email.</p>

<p></p>

<p>Main Page:</p>
<img src='https://github.com/Volkoviysash/jwt-authorization/assets/90283311/657f6d68-4e6c-4eb3-97f1-c56e6b9b244d' alt="Main Page"/>
<p>Here you can view basic information about your account, and you can also log out and see the nicknames of all registered users clicking the Get Users button.</p>

<p></p>

<p>Get Users Section:</p>
<img src='https://github.com/Volkoviysash/jwt-authorization/assets/90283311/29102638-dd20-40b9-8310-8c0cd5cc8023' alt="Get Users Section"/>
<p>This button works only for authorized users and shows all registered users.</p>

<h2 id="installation">Installation</h2>

<p>To get started with this example, follow the steps below:</p>

<ol>
  <li>Clone the repository:</li>
</ol>

<pre><code>git clone https://github.com/your-username/your-repository.git
</code></pre>

<ol start="2">
  <li>Navigate to the <code>client</code> folder:</li>
</ol>

<pre><code>cd client
</code></pre>

<ol start="3">
  <li>Install the dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>

<ol start="4">
  <li>Navigate to the <code>server</code> folder:</li>
</ol>

<pre><code>cd ../server
</code></pre>

<ol start="5">
  <li>Install the server dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>

<h2 id="usage">Usage</h2>

<p>To run the application, follow the steps below:</p>

<ol>
  <li>Navigate to the <code>client</code> folder:</li>
</ol>

<pre><code>cd client
</code></pre>

<ol start="2">
  <li>Start the React development server:</li>
</ol>

<pre><code>npm start
</code></pre>

<p>This will start the client application on <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<ol start="3">
  <li>Open a new terminal window and navigate to the <code>server</code> folder:</li>
</ol>

<pre><code>cd ../server
</code></pre>

<ol start="4">
  <li>Start the Node.js server:</li>
</ol>

<pre><code>npm start
</code></pre>

<p>The server will start running on <a href="http://localhost:4000">http://localhost:4000</a>.</p>

<ol start="5">
  <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to access the client application.</li>
  <li>Register an account, verify it via email, and log in to access authorized features.</li>
</ol>

