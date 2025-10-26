// 2)

// Fetch User Data:
// Write a function that uses fetch and async/await to retrieve user data from a public API (e.g., https://jsonplaceholder.typicode.com/users). Log the names of all users.
// const names = async () => {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users")
//     const json = await api.json()
//     json.forEach(user => {
//         console.log(user.name)
//     })
// }
// names()
// 3)

// Handle API Errors:
// Fetch data from an invalid API link inside a try...catch block. Display a custom error message if the request fails.
// const errorApi = async () => {
//     try {
//         const api = await fetch("https://jsonplaceholder.typicode.com/user")
//         const json = await api.json()
//         json.forEach(user => {
//             console.log(user.name)
//         })
//     } catch (error) {
//         console.log("Reject")
//     }
// }
// errorApi()
// 4)

// Retry on Failure:
// Create a function that attempts to fetch data from an API. If the request fails, it retries up to 3 times before throwing an error.
const errorApi = async () => {
    for (let i = 0; i < 3; i++) {
        try {
            const api = await fetch("https://jsonplaceholder.typicode.com/user")
            const json = await api.json()
            json.forEach(user => {
                console.log(user.name)
            })
            return
        } catch (error) {
            console.log(`Attempt ${i + 1} failed`)
        }
    }
    console.log("Reject")
}
errorApi()

// 5)

// Sequential Requests:
// Make two API calls one after the other using await. For example, first fetch a list of posts, then fetch details for the first post’s author.
// const fetchPostAndAuthor = async () => {
//     try {
//         const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const posts = await postsResponse.json()

//         const firstPost = posts[0]
//         console.log("First Post:", firstPost.title)

//         const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`)
//         const author = await authorResponse.json()

//         console.log("Author:", author.name)
//     } catch(error) {
//         console.log("Error fetching data:", error)
//     }
// }
// fetchPostAndAuthor()