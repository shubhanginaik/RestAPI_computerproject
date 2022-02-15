# REST

## links

HTTP
https://developer.mozilla.org/en-US/docs/Web/HTTP

methods:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

status:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## methods
GET
POST
PUT
DELETE

OPTIONS
HEAD
PATCH

## resource

For example:
```
http://localhost:4000/api(computers) 
``` 

The GET request would then be:

```
GET http://localhost:4000/api/computers HTTP/1.1

``` 

### to returns all computers as json array
GET /api/computers

### to return the computer with id 2
GET /api/computers/2

return value
```json
{
    "id":2,
    "name":"Cera 2400",
    "type":"tabletop",
    "processor":"Brain 456",
    "amount":25
}
```

### to add a new computer
POST /api/computers

computer is given in body as json object. Returns a status object

#### Example
```json
{
    "id":2,
    "name":"BMI 2",
    "type":"laptop",
    "processor":"Brain 456",
    "amount":25
}
```

### to update/add
PUT /api/computers/3

computer is given in body as json object. Returns a status object.

If the computer with the given number doesn't exist, it will be added
If the given number in URL does not match the id in the object,
KEYS_DO_NOT_MATCH status is returned


### to remove the computer with id 3
DELETE /api/computers/3

returns a status object

## Usage with fetch

let's assume `cors` situation:

### GET

```js
const iptions={
    method:'GET',
    mode:'cors'
}
const data = await fetch(uriValue, options);
const result = data.json();
```

The GET is default, so you can just
```js
const data = await fetch(uriValue,{mode:'cors'});
const result = data.json(;)
```

#### for example
```js
fetch('http://localhost:4000/api/computers',{mode:'cors'})
````

or

```js
fetch('http://localhost:4000/api/computers/2',{mode:'cors'})
```

```js
fetch(`http://localhost:4000/api/computers/${id}`,{mode:'cors'})
```


### POST and PUT

```js
const options={
    method:'POST',
    mode:'cors',
    body:JSON.stringify(computerObject),
    headers:{'Content-Type':'application/json'}
}
```

```js
const options={
    method:'PUT',
    mode:'cors',
    body:JSON.stringify(computerObject),
    headers:{'Content-Type':'application/json'}
}
```

```js
const data = await fetch(uriValue,options);
const result = await data.json();
```

for Example POST:
```js
fetch('http://localhost:4000/api/computers',options);
```
computerObject:
```json
{
    "id":2,
    "name":"BMI 2",
    "type":"laptop",
    "processor":"Brain 456",
    "amount":25
}
``` 

foe Example:PUT
```js
fetch('http://localhost:4000/api/computers/3',options);
```

### DELETE
```js
const iptions={
    method:'DELETE',
    mode:'cors'
}
```
const data = await fetch(uriValue, options);
const result = data.json();

foe Example:DELETE:
```js
fetch('http://localhost:4000/api/computers/3',options);
```


