import http.client

conn = http.client.HTTPSConnection("dev-ajkoh6s6sz15iztu.us.auth0.com")

payload = "{\"client_id\":\"R7uM0QsiKp0SevDZ5vA12NXplsBPZKjQ\",\"client_secret\":\"jImJApQlcu96mOS0VmXeKcoO-BzcQwrCBWqc2rgJECFNUusvRQSA5xKu1UVFZEFj\",\"audience\":\"https://api.myapp.com\",\"grant_type\":\"client_credentials\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/oauth/token", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))