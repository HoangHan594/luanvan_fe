import createApiAdmin from "./api.auth.service";

class AuthorizationServiceAdmin {

    constructor(baseUrl = "https://luanvan-1-kmlh.onrender.com/admin/auth") {
        this.api = createApiAdmin(baseUrl);
    }

    async submitLogin(credentials) {
        try {
            const response = await this.api.post('/login', credentials);
            return response;
        } catch (error) {
            throw error;
        }
    };


    async logOut(data) {
        return (await this.api.get("/logout", data)).data;
    }
}

export default new AuthorizationServiceAdmin();