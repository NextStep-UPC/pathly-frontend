export class TestService {
    static async fetchQuestions() {
        const response = await fetch('http://localhost:3001/questions');
        if (!response.ok) {
            throw new Error('Error al obtener las preguntas');
        }
        return await response.json();
    }
}