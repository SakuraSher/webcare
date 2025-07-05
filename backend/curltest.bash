curl --request POST 
  --url https://dev-ajkoh6s6sz15iztu.us.auth0.com/oauth/token 
  --header 'content-type: application/json' 
  --data '{
    "client_id":"R7uM0QsiKp0SevDZ5vA12NXplsBPZKjQ",
    "client_secret":"jImJApQlcu96mOS0VmXeKcoO-BzcQwrCBWqc2rgJECFNUusvRQSA5xKu1UVFZEFj",
    "audience":"https://api.myapp.com",
    "grant_type":"client_credentials"
  }'