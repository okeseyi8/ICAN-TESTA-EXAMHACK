import api from "../api";


export async function loginUser(loginPayload: loginPayload){
    const res = await api.post("/api/v1/auth/login", loginPayload, {
    withCredentials: true, 
  })
    return res.data
}
 
export async function registerUser(signUpPayload: SignUp){
    const res = await api.post("/api/v1/auth/register", signUpPayload)
    return res.data
}
export async function updateUserImage(updateUserPayload: updateUserPayload, user_id: string) {
  const res = await api.patch("/api/v1/profile/update", updateUserPayload, {
    params: { user_id },
    withCredentials: true,
  });

  return res.data;
}

export async function uploadSignInImage(file: any) {
  const formData = new FormData();
  formData.append("file", file); 

  const res = await api.post("/api/v1/profile/upload-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
   console.log(res.data.url)
  return res.data;
}