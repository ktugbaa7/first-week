import axios from "axios";

async function getDataUserAndId(userId) {
    const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

    console.log(user);
    console.log(post);
}

 async function getData(userId) {
    try{
        const userAndPost = await getDataUserAndId(userId);

        const userData = [userAndPost];
        return userData;

    }catch(e) {
        console.log(e);
    }
}; 

export default getData;

