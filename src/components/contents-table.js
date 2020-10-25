const React = require('react');

class Content extends React.Component {
	render() {
		return(
			<div style={{display:"flex",flexDirection:"col"}}>
				<div style={{width:"25%"}}>
					<ul>
						<li><a href="#messages">Messages</a></li>
						<li><a href="#flow-control">Flow control</a></li>
						<li><a href="#error-handling">Error handling</a></li>
						<li><a href="#data-formats">Data formats</a></li>
						<li><a href="#http-endpoints">HTTP endpoints</a></li>
						<li><a href="#http-requests">HTTP requests</a></li>
						<li><a href="#mqtt">MQTT</a></li>
						<li><a href="#odata">OData</a></li>
						<li><a href="#sequelize">Sequelize</a></li>
						<li><a href="#auth">Auth</a></li>
					</ul>
				</div>
				<div style={{width:"75%"}}>
					<div>
						<h1 style={{margin:"0px"}}>Ignite Cookbook</h1>
						<hr style={{width:"100%",border:"1px solid #F46224"}}></hr>
						<p>This is a collection of recipes for how to use Ignite to solve many common programming tasks.</p>
						<p>Each recipe addresses a specific problem and shows by example how it can be solved using the capabilities of the platform.</p>
						<h2>Table of Contents</h2>
						<h3 id="messages">Messages</h3>
						<ul>
							<li><a href="docs/messages/set-message-property-fixed">Set a message property to a fixed value</a></li>
							<li><a href="docs/messages/set-message-property-fixed">Delete a message property</a></li>
							<li><a href="docs/messages/move-property">Move a message property</a></li>
							<li><a href="docs/messages/map-range">Map a property between different numeric ranges</a></li>
						</ul>
						<h3 id="flow-control">Flow control</h3>
						<ul>
							<li><a href="docs/flow-control/trigger-on-start">Trigger a flow whenever Ignite starts</a></li>
							<li><a href="docs/flow-control/trigger-at-interval">Trigger a flow at regular intervals</a></li>
							<li><a href="docs/flow-control/trigger-at-time">Trigger a flow at a specific time</a></li>
							<li><a href="docs/flow-control/route-on-property">Route a message based on one of its properties</a></li>
							<li><a href="docs/flow-control/route-on-context">Route a message based on a context value</a></li>
							<li><a href="docs/flow-control/operate-on-array">Perform an operation on each element in an array</a></li>
							<li><a href="docs/flow-control/trigger-timeout">Trigger a flow if a message isn’t received after a defined time</a></li>
							<li><a href="docs/flow-control/trigger-placeholder">Send placeholder messages when a stream stops sending</a></li>
							<li><a href="docs/flow-control/rate-limit-messages">Slow down messages passing through a flow</a></li>
							<li><a href="docs/flow-control/rate-limit-message-stream">Handle messages at a regular rate</a></li>
							<li><a href="docs/flow-control/report-by-exception">Drop messages that have not changed value</a></li>
							<li><a href="docs/flow-control/join-streams">Create a single message from separate streams of messages</a></li>
						</ul>
						<h3 id="error-handling">Error handling</h3>
						<ul>
							<li><a href="docs/error-handling/retry-on-error">Trigger a flow when a node throws an error</a></li>
							<li><a href="docs/error-handling/trigger-on-error">Automatically retry an action after an error</a></li>
						</ul>
						<h3 id="data-formats">Working with data formats</h3>
						<ul>
							<li><a href="docs/data-formats/convert-json">Convert to/from JSON</a></li>
							<li><a href="docs/data-formats/convert-xml">Convert to/from XML</a></li>
							<li><a href="docs/data-formats/convert-yaml">Convert to/from YAML</a></li>
							<li><a href="docs/data-formats/generate-csv">Generate CSV output</a></li>
							<li><a href="docs/data-formats/parse-csv">Parse CSV input</a></li>
							<li><a href="docs/data-formats/simple-get-request">Extracting data from an HTML page</a></li>
							<li><a href="docs/data-formats/split-text">Split text into one message per line</a></li>
						</ul>
						<h3 id="http-endpoints">HTTP endpoints</h3>
						<ul>
							<li><a href="docs/http-endpoints/create-endpoint">Create an HTTP Endpoint</a></li>
							<li><a href="docs/http-endpoints/handle-query-parameters">Handle query parameters passed to an HTTP endpoint</a></li>
							<li><a href="docs/http-endpoints/handle-url-parameters">Handle url parameters in an HTTP endpoint</a></li>
							<li><a href="docs/http-endpoints/access-request-headers">Access HTTP request headers</a></li>
							<li><a href="docs/http-endpoints/serve-json-file">Serve JSON content</a></li>
							<li><a href="docs/http-endpoints/serve-local-file">Serve a local file</a></li>
							<li><a href="docs/http-endpoints/post-raw-data">Post raw data to a flow</a></li>
							<li><a href="docs/http-endpoints/post-form-data">Post form data to a flow</a></li>
							<li><a href="docs/http-endpoints/post-json-data">Post JSON data to a flow</a></li>
							<li><a href="docs/http-endpoints/work-with-cookies">Work with cookies</a></li>
						</ul>
						<h3 id="http-requests">HTTP requests</h3>
						<ul>
							<li><a href="docs/http-requests/get-request">Simple GET request</a></li>
							<li><a href="docs/http-requests/set-request-url">Set the url of a request</a></li>
							<li><a href="docs/http-requests/set-url-using-template">Set the url of a request using a template</a></li>
							<li><a href="docs/http-requests/set-query-string-params">Set query string parameters</a></li>
							<li><a href="docs/http-requests/get-parsed-JSON">Get a parsed JSON response</a></li>
							<li><a href="docs/http-requests/get-binary-response">Get a binary response</a></li>
							<li><a href="docs/http-requests/set-request-headers">Set a request header</a></li>
						</ul>
						<h3 id="mqtt">MQTT</h3>
						<ul>
							<li><a href="docs/mqtt/connect-to-broker">Connect to an MQTT broker</a></li>
							<li><a href="docs/mqtt/connect-to-broker">Publish messages to a topic</a></li>
							<li><a href="docs/mqtt/set-topic">Set the topic of a published message</a></li>
							<li><a href="docs/mqtt/publish-retained-message">Publish a retained message to a topic</a></li>
							<li><a href="docs/mqtt/subscribe">Subscribe to a topic</a></li>
							<li><a href="docs/mqtt/parsed-json">Receive a parsed JSON message</a></li>
						</ul>
						<h3 id="odata">OData</h3>
						<ul>
							<li><a href="docs/odata/define-metadata-model">Define a Metadata Model</a></li>
							<li><a href="docs/odata/metadata-model-using-edm">Define Metadata Model using EDM</a></li>
							<li><a href="docs/odata/convert-req-to-query">Convert Request to Query</a></li>
							<li><a href="docs/odata/read-only-odata-service">Read Only OData Service</a></li>
							<li><a href="docs/odata/create-an-odata-service">Create an OData Service</a></li>
						</ul>
						<h3 id="sequelize">Sequelize</h3>
						<ul>
							<li><a href="docs/sequelize/execute-a-query">Execute a Query</a></li>
						</ul>
						<h3 id="auth">Auth</h3>
						<ul>
							<li><a href="docs/auth/basic-auth">Basic Authentication</a></li>
							<li><a href="docs/auth/generate-jwt">Generate JWT</a></li>
							<li><a href="docs/auth/verify-jwt">Verify JWT</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Content;
