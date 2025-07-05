import http.client

conn = http.client.HTTPConnection("localhost",3001)

try:
     headers = { 'authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikg1aUlMa1BKdzlaZThGeFQtdU55ZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1hamtvaDZzNnN6MTVpenR1LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJSN3VNMFFzaUtwMFNldkRaNXZBMTJOWHBsc0JQWktqUUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkubXlhcHAuY29tIiwiaWF0IjoxNzUxNzI3MDQwLCJleHAiOjE3NTE4MTM0NDAsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsImF6cCI6IlI3dU0wUXNpS3AwU2V2RFo1dkExMk5YcGxzQlBaS2pRIn0.gCV4qmsJmCzPcOQJSltTq65V_7BZt5wAC_X1dlIRTcYjyyST9aBSTGHJE7UcuCMlBHxQ201i0pS7zuJILk_dG8KFGDrDK6cktrec4rtJTdGNvtiWPioge1SX2Q8Y-nQPxhuXPz642MPu9m71UFJRh24yd4GCq9DkQcOeeDSbmso0DXhMrDwZrcV06SBAmUHTCyH304Bee-PU2yd5vZt_hoORrlCgVwESsJ8XreHaZunPfS-q3DwFWgD6Sx8QWICv8XB_x9dFBLIZprLjqa3qnxt8CCGaeDQtEsJzNloC1tOrQOXQDBwOtOs7sHSQnIvipUCCp6NeWOuwTXuNYYOnLw" }

     conn.request("GET", "/api/user-data", headers=headers)

     res = conn.getresponse()
     print(res.read().decode())
except Exception as e:
    print(f"Error: {e}")
finally:
    conn.close()