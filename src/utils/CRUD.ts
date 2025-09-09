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

export async function creatPost(post: any) {
  try {
    const res = await fetch("http://localhost:3000/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return await res.json()
  } catch (err) {
    console.error(" err:", err);
    throw err;
  }
}
