import type post from "../interface/post.typr.ts"
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


// {/*A function that makes a fetch request to the server to get a post by ID. */}
// export async function readPostById(id: any) {
//   try {
//     const res = await fetch(`http://localhost:3000/post/${id}`);
//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.error);
//     }
//     return await res.json();
//   } catch (err) {
//     console.error(" err:", err);
//     throw err;
//   }
// }

export async function readAllPostAuth(user:any) {
  const res:any = await fetch(`http://localhost:3000/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user.username, password: user.password }),
  });
  if (!res.ok) throw new Error("Failed to load posts",res.status);
  return (await res.json()) as any[];
}


export async function readPostById(id: string, user:any ) {
  const res:any = await fetch(`http://localhost:3000/post/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user.username, password: user.password }),
  });
  if (!res.ok) throw new Error("Failed to load posts",res.status);
  return (await res.json()) as any;
}

