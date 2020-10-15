import Constants from 'expo-constants';

export function getDatabaseURL () {
    return(Constants.manifest.extra.databaseURL);
}

export function getApplicationVersion () {
    return(Constants.manifest.version);
}


/* Asynchronously sends a post request to the given URL with given payload of data
Request Properties:
    // Default options are marked with *
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
*/
export async function postDataAsync(url = '', data={}) {
    //Does not work, return value does not seem to hold the same status code as writing the function inline. My guess 
    //is I do not have the right syntax for invoking an async function, and the Promise object is handled differently.
    const request = new Request(url,{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })

    try {
        return await fetch(request)
    } catch(error) {
        console.log("Error during fetch request, request= "+ JSON.stringify(request) + "error: " + error)
    }
}

export function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

