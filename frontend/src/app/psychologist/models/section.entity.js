/**
 * @class Section
 * @description Represents a session or appointment with a student
 */
export class Section {
    /**
     * Creates a new Section instance
     * @param {Object} params - Section initialization parameters
     * @param {string} [params.id=''] - Unique identifier for the section
     * @param {number} [params.studentId=null] - ID of the related student
     * @param {string} [params.title=''] - Title or reason for the session
     * @param {string} [params.description=''] - Description or notes
     * @param {string} [params.date=''] - Date and time of the session (ISO format)
     * @param {string} [params.status='Pendiente'] - Status of the session (e.g., Confirmada, Pendiente, Cancelada)
     * @param {string} [params.mode='Presencial'] - Mode of the session (Presencial / Videollamada)
     */
    constructor({
                    id = '',
                    studentId = null,
                    title = '',
                    description = '',
                    date = '',
                    status = 'Pendiente',
                    mode = 'Presencial'
                } = {}) {
        /** @type {string} */
        this.id = id

        /** @type {number} */
        this.studentId = studentId

        /** @type {string} */
        this.title = title

        /** @type {string} */
        this.description = description

        /** @type {string} */
        this.date = date

        /** @type {string} */
        this.status = status

        /** @type {string} */
        this.mode = mode
    }
}
