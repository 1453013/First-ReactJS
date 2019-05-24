# First-ReactJS

# from the qa-app/backend directory
node src

# issue an HTTP GET request
curl localhost:8081

# issue a POST request
curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "How do I make a sandwich?",
  "description": "I am trying very hard, but I do not know how to make a delicious sandwich. Can someone help me?"
}' localhost:8081

curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "What is React?",
  "description": "I have been hearing a lot about React. What is it?"
}' localhost:8081

# re-issue the GET request
curl localhost:8081

# move into the new directory
cd frontend

# start your React app
npm start
