import api from "../api";


export async function loginUser(loginPayload: loginPayload){
    const res = await api.post("/api/v1/auth/login", loginPayload)
    return res.data
}
 
export async function registerUser(signUpPayload: SignUp){
    const res = await api.post("/api/v1/auth/register", signUpPayload)
    return res.data
}
export async function uploadSignInImage(image: any){
    const res = await api.post("/api/v1/profile/upload-image", image)
    return res.data
}
