import { useRef } from "react";
import { useNavigate } from "react-router";
export default function Create() {
        const navigate = useNavigate();
  const urlRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const allstoryRef = useRef<HTMLInputElement>(null);
  const fullnameRef = useRef<any>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<any>(null);

  return (
    <>
      <h1 className="title">Hey, this is the place to post your own post.</h1>
      <form ref={formRef} action="">
        <select ref={selectRef} name="src" id="">
        <option value="http://localhost:3000/image/photo2.jpg">Mountains</option>
        <option value="http://localhost:3000/image/photo1.avif">Headphones</option>
        <option value="http://localhost:3000/image/photo4.jpg">Chill</option>
        <option value="http://localhost:3000/image/photo3.jpg">sky</option>
        </select>
        <input type="text" name="desc" placeholder="enter your Descripition" ref={descRef}/>
        <input type="text" name="allStory" placeholder="Insert your story" ref={allstoryRef} />
        <input type="text" name="fullName" placeholder="Insert full name" ref={fullnameRef} />

        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log(urlRef.current?.value);
            console.log(descRef.current?.value);
            console.log(allstoryRef.current?.value);
    
            
            if (!selectRef.current?.value ||!descRef.current?.value ||!allstoryRef.current?.value ||!fullnameRef.current?.value ){
              return 
            }
            const formData = new FormData(formRef.current as HTMLFormElement);
            const post: Record<string, any> = {};

            formData.forEach((value, key) => {
              post[key] = value;
              console.log("value is ",post);
              
            });
            try {
              fetch("http://localhost:3000/create-post", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
              });
             navigate("/finish")
            } catch (err) {
              console.error(" err:", err);
              throw err;
            }
          }}>
            send
          </button>
      </form>
    </>
  );
}
