const BASE = "https://salty-lake-34285.herokuapp.com/api/"


export async function getPostList() {
    try {

            const response = await fetch(`${BASE}posts`)
            const result = await response.json()
            return result.posts
          


            }catch (error) {
                console.log("An error occurred", error)
            }
}



// export async function logIn(paramUsername, paramPassword) {
//     try {
//         const userToLogin = {
//             method: "POST",
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 username: paramUsername, password: paramPassword
//             })
//         }
//         const response = await fetch(`${BASE}users/login`,userToLogin)
//         const result = await response.json()
//         return result.token
//     } catch (error) {
//         console.log('there is an error', error)
//     }
// }




