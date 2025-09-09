{/*A function that makes a fetch request to the server to get all posts */}
export async function readAllPost() {
  try {
    const res = await fetch("http://localhost:3000/post");
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    }
    return await res.json();
  } catch (err) {
    console.error(" err:", err);
    throw err;
  }
}


{/*A function that makes a fetch request to the server to get a post by ID. */}
export async function readPostById(id: any) {
  try {
    const res = await fetch(`http://localhost:3000/post/${id}`);
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    }
    return await res.json();
  } catch (err) {
    console.error(" err:", err);
    throw err;
  }
}


