curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{
  "passwords": {
    "old": "example password",
    "new": "new example password"
  }'
echo
