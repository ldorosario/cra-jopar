import axios from "axios";

class ApiService {
  private url = "http://192.168.1.103:8080/v1/entrada-saida";

  async criarDados(body: Record<string, any>) {
    try {
      const response = await axios.post(`${this.url}/dados/novo`, body);
      return response.data;
    } catch (error: any) {
      console.error(error.response.data);
      throw error;
    }
  }

  async atualizarDados(id: number, body: Record<string, any>) {
    try {
      const response = await axios.put(`${this.url}/dados/${id}`, body);
      return response.data;
    } catch (error: any) {
      console.error(error.response.data);
      throw error;
    }
  }

  async buscarDados() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async excluirDados(id: number) {
    try {
      const response = await axios.delete(`${this.url}/dados/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default ApiService;
