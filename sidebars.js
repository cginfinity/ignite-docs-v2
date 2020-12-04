module.exports = {
  docs: {
    "Messages": [
      "messages/set-message-property-fixed",
      "messages/delete-property",
      "messages/move-property",
      "messages/map-range"
    ],
    "Data Formats":[
      "data-formats/convert-json",
      "data-formats/convert-xml",
      "data-formats/convert-yaml",
      "data-formats/generate-csv",
      "data-formats/parse-csv",
      "data-formats/split-text"
    ],
    "Flow Control": [
      "flow-control/trigger-on-start",
      "flow-control/trigger-at-interval",
      "flow-control/trigger-at-time",
      "flow-control/route-on-property",
      "flow-control/route-on-context",
      "flow-control/operate-on-array",
      "flow-control/trigger-timeout",
      "flow-control/trigger-placeholder",
      "flow-control/rate-limit-messages",
      "flow-control/rate-limit-message-stream",
      "flow-control/report-by-exception",
      "flow-control/join-streams"
    ],
    "Error Handling": [
      "error-handling/retry-on-error",
      "error-handling/trigger-on-error"
    ],
    "HTTP Endpoints": [
      "http-endpoints/create-endpoint",
      "http-endpoints/handle-query-parameters",
      "http-endpoints/handle-url-parameters",
      "http-endpoints/access-request-headers",
      "http-endpoints/serve-json-content",
      "http-endpoints/serve-local-file",
      "http-endpoints/post-raw-data",
      "http-endpoints/post-form-data",
      "http-endpoints/post-json-data",
      "http-endpoints/work-with-cookies"
    ],
    "HTTP Requests": [
      "http-requests/get-request",
      "http-requests/set-request-url",
      "http-requests/set-url-using-template",
      "http-requests/set-query-string-params",
      "http-requests/get-parsed-JSON",
      "http-requests/get-binary-response",
      "http-requests/set-request-headers"
    ],
    "MQTT": [
      "mqtt/connect-to-broker",
      "mqtt/publish-message",
      "mqtt/set-topic",
      "mqtt/publish-retained-message",
      "mqtt/subscribe",
      "mqtt/parsed-json"
    ],
    "OData": [
      "odata/define-metadata-model",
      "odata/metadata-model-using-edm",
      "odata/convert-req-to-query",
      "odata/read-only-odata-service",
      "odata/create-an-odata-service"
    ],
    "Sequelize": [
      "sequelize/execute-a-query"
    ],
    "Auth": [
      "auth/basic-auth",
      "auth/generate-jwt",
      "auth/verify-jwt"
    ]
  },
};
