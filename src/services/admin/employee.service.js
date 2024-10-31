import createApiAdmin from "./api.auth.service";

class EmployeeService {
    constructor(baseUrl = "https://luanvan-1-kmlh.onrender.com/admin/employee") {
        this.api = createApiAdmin(baseUrl);
    }

    async getReaders() {
        try {
            return (await this.api.get('/getReaders')).data;
        } catch (error) {
            throw error;
        }
    }

    async statusBook(readerId, bookId, status) {
        try {
            const response = await this.api.put(`/statusBook/${readerId}/${bookId}`, { status });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new EmployeeService();