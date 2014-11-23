export DBa="http://127.0.0.1:5984/mydb"
curl -H "Content-Type:application/json" -d '{"docs":[{"key":"baz","name":"bazzel"},{"key":"bar","name":"barry"}]}' -X POST $DBa/_bulk_docs
curl -H "Content-Type:application/json" -d @test.json -X POST $DBa/_bulk_docs
