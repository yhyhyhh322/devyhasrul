let data = []

exports.handler = async (event) => {

if(event.httpMethod === "GET"){
return {
statusCode:200,
body: JSON.stringify(data)
}
}

if(event.httpMethod === "POST"){

const body = JSON.parse(event.body)

data.push(body)

return {
statusCode:200,
body: JSON.stringify(data)
}

}

return { statusCode:405 }
}