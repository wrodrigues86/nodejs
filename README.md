# ExemploS de requisição de token de acesso Salesforce
localhost:555/token

# Credênciais de acesso
grant_type = password <br/>
client_id = '' <br/>
client_secret = '' <br/>
username = '' <br/>
password = '' <br/>
login_url = 'https://test.salesforce.com'<br/>

# Exemplos de requisição Salesforce
# Passar no header o parãmetro "instance_url" com a url retornada na chamada do token
GET - localhost:555/Conta <br/>
GET - localhost:555/Conta?Id=0038V00002buirFQAQ <br/>
POST - localhost:555/Conta <br/>
PUT - localhost:555/Conta <br/>
DELETE - localhost:555/Conta?Id=0038V00002buirFQAQ <br/>
