module.exports = {
  someSidebar: {
    "Getting Started": [
      "getting-started/introduction",
      "getting-started/what-is-ignite",
      {
        "Try Ignite": [
          "getting-started/try-ignite/introduction",
          {
            "Deploy an App": [
              {
                "Deploy to AWS": [
                  // "getting-started/try-ignite/deploy-an-app/deploy-to-aws/introduction",
                  // "getting-started/try-ignite/deploy-an-app/deploy-to-aws/getting-started", 
                  // "getting-started/try-ignite/deploy-an-app/deploy-to-aws/deploy-on-aws-lightsail",
                  // "getting-started/try-ignite/deploy-an-app/deploy-to-aws/manage-application"
                ],
                "Deploy to Azure": [
                  "getting-started/try-ignite/deploy-an-app/deploy-to-azure/introduction",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-azure/getting-started",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-azure/deploy-on-azure",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-azure/manage-application"
                ],
                "Deploy to Heroku": [
                  "getting-started/try-ignite/deploy-an-app/deploy-to-heroku/introduction",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-heroku/getting-started",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-heroku/deploy-on-heroku",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-heroku/manage-application",
                  "getting-started/try-ignite/deploy-an-app/deploy-to-heroku/upgrade-runtime"
                ],
                "Deploy to Premise": [
                  "getting-started/try-ignite/deploy-an-app/deploye-to-onpremise/introduction",
                  "getting-started/try-ignite/deploy-an-app/deploye-to-onpremise/getting-started",
                  "getting-started/try-ignite/deploy-an-app/deploye-to-onpremise/how-to-setup"
                ]
              }
            ]
          }
        ]
      }
    ],
    "Ignite Ecosystem": [
      {
        "Runtime": [
          "ignite-ecosystem/runtime/runtime-introduction",
        ],
        "Editor": [

        ],
        "Monitor": [
          "ignite-ecosystem/monitor/monitor-introduction",
          "ignite-ecosystem/monitor/how-to-use"
        ],
        "Designer": [
          "ignite-ecosystem/designer/designer"
        ],
        "Explorer": [
          "ignite-ecosystem/explorer/jsonata-explorer"
        ],
        "Dashboard": [

        ]
      }
    ],
    "Developer Guide": [
      {
        "Basics": [
          {
            "Messages": [
              "developer-guide/basics/messages/set-message-property-fixed",
              "developer-guide/basics/messages/delete-property",
              "developer-guide/basics/messages/move-property",
              "developer-guide/basics/messages/map-range"
            ],
            "Flow Control": [
              "developer-guide/basics/flow-control/trigger-on-start",
              "developer-guide/basics/flow-control/trigger-at-interval",
              "developer-guide/basics/flow-control/trigger-at-time",
              "developer-guide/basics/flow-control/route-on-property",
              "developer-guide/basics/flow-control/route-on-context",
              "developer-guide/basics/flow-control/operate-on-array",
              "developer-guide/basics/flow-control/trigger-timeout",
              "developer-guide/basics/flow-control/trigger-placeholder",
              "developer-guide/basics/flow-control/rate-limit-messages",
              "developer-guide/basics/flow-control/rate-limit-message-stream",
              "developer-guide/basics/flow-control/report-by-exception",
              "developer-guide/basics/flow-control/join-streams"
            ],
            "Error Handling": [
              "developer-guide/basics/error-handling/retry-on-error",
              "developer-guide/basics/error-handling/trigger-on-error"
            ],
            "Data Formats": [
              "developer-guide/basics/data-formats/convert-json",
              "developer-guide/basics/data-formats/convert-xml",
              "developer-guide/basics/data-formats/convert-yaml",
              "developer-guide/basics/data-formats/generate-csv",
              "developer-guide/basics/data-formats/parse-csv",
              "developer-guide/basics/data-formats/split-text"
            ],
            "HTTP Endpoints": [
              "developer-guide/basics/http-endpoints/create-endpoint",
              "developer-guide/basics/http-endpoints/handle-query-parameters",
              "developer-guide/basics/http-endpoints/handle-url-parameters",
              "developer-guide/basics/http-endpoints/access-request-headers",
              "developer-guide/basics/http-endpoints/serve-json-content",
              "developer-guide/basics/http-endpoints/serve-local-file",
              "developer-guide/basics/http-endpoints/post-raw-data",
              "developer-guide/basics/http-endpoints/post-form-data",
              "developer-guide/basics/http-endpoints/post-json-data",
              "developer-guide/basics/http-endpoints/work-with-cookies"
            ],
            "HTTP Requests": [
              "developer-guide/basics/http-requests/get-request",
              "developer-guide/basics/http-requests/set-request-url",
              "developer-guide/basics/http-requests/set-url-using-template",
              "developer-guide/basics/http-requests/set-query-string-params",
              "developer-guide/basics/http-requests/get-parsed-JSON",
              "developer-guide/basics/http-requests/get-binary-response",
              "developer-guide/basics/http-requests/set-request-headers"
            ],
            "MQTT": [
              "developer-guide/basics/mqtt/connect-to-broker",
              "developer-guide/basics/mqtt/publish-message",
              "developer-guide/basics/mqtt/set-topic",
              "developer-guide/basics/mqtt/publish-retained-message",
              "developer-guide/basics/mqtt/subscribe",
              "developer-guide/basics/mqtt/parsed-json"
            ]
          }
        ],
      },
      {
        "Advanced": [
          {
            "Breakpoint": [
              "developer-guide/advanced/breakpoint/introduction",
              "developer-guide/advanced/breakpoint/how-to-use"
            ],
            "JSONata": [
              "developer-guide/advanced/jsonata/introduction",
            ],
            "OData": [
              "developer-guide/advanced/odata/define-metadata-model",
              "developer-guide/advanced/odata/metadata-model-using-edm",
              "developer-guide/advanced/odata/convert-req-to-query",
              "developer-guide/advanced/odata/read-only-odata-service",
              "developer-guide/advanced/odata/create-an-odata-service"
            ],
            "OpenAPI": [
              "developer-guide/advanced/open-api/introduction",
              "developer-guide/advanced/open-api/open-api-client",
              "developer-guide/advanced/open-api/open-api-router"
            ],
            "Sequelize": [
              "developer-guide/advanced/sequelize/execute-a-query"
            ],
            "Security": [
              "developer-guide/advanced/security/basic-authentication",
              "developer-guide/advanced/security/generate-jwt",
              "developer-guide/advanced/security/verify-jwt"
            ],
          }
        ]
      }
    ],
    "Tutorials": [

    ],
    "Connectors": [
      // {
      //   "SalesForce": [
      //     'doc1'
      //   ],
      //   "Netsuite": [
      //     'doc1'
      //   ],
      //   "Plaid": [
      //     'doc1'
      //   ],
      //   "MySql": [
      //     'doc1'
      //   ],
      //   "Sql Server": [
      //     'doc1'
      //   ],
      //   "Twilio": [
      //     'doc1'
      //   ],
      //   "Sendgrid": [
      //     'doc1'
      //   ]
      // }
    ],
    "Devops Practices": [
      {
        "Release Management": [
          "devops-practices/release-management/upload-download-release-packages"
        ],
        "CI/CD": [
           "devops-practices/ci-cd/azure",
           "devops-practices/ci-cd/heroku"
        ]
      }
    ]
  }
};
