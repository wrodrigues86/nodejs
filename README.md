# ExemploS de requisição de token de acesso Salesforce
localhost:555/token

# Credênciais de acesso
grant_type = password /n
client_id = '' /n
client_secret = '' /n
username = '' /n
password = '' /n
login_url = 'https://test.salesforce.com'/n

# Exemplos de requisição Salesforce
# Passar no header o parãmetro "instance_url" com a url retornada na chamada do token
GET - localhost:555/Conta
GET - localhost:555/Conta?Id=0038V00002buirFQAQ
POST - localhost:555/Conta
PUT - localhost:555/Conta
DELETE - localhost:555/Conta?Id=0038V00002buirFQAQ
