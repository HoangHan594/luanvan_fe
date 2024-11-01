import createApiClient from "./api.service";

class BookService {
    constructor(baseUrl = "https://luanvan-1-kmlh.onrender.com/books") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async borrowBook(bookId) {
        try {
            const response = await this.api.get('/');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export default new BookService();