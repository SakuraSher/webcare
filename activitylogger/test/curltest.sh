curl -X POST http://localhost:4002/log \
- H "Content-Type: application/json" \
- d '{"event": "Login" , "user": "john@example.com"}'