import createApiClient from "./api.service"

class ReaderService {
    constructor(baseUrl = "https://luanvan-1-kmlh.onrender.com/admin/reader") {
        this.apiClient = createApiClient(baseUrl)
    }

    async getAllUsers() {
        try {
            const response = await this.apiClient.get('/');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export default new ReaderService();