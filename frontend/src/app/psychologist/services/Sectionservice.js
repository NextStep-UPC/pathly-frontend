import httpInstance from "../../shared/services/http.instance.js";

/**
 * @class SectionService
 * @description Service class for handling CRUD operations on categories using HTTP requests
 */// src/entities/section.entity.js
import axios from 'axios'

const API = 'http://localhost:3000/sections'

export class SectionService {
    /** @type {string} The API endpoint for categories */
    /**
     * Retrieves all categories
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of categories
     */
    getAllExpanded() {
        return axios.get(`${API}?_expand=student`)
    }
    getAll() {
        return axios.get(API)
    }
    getById(id) {
        return axios.get(`${API}/${id}`)
    }
    create(section) {
        return axios.post(API, section)
    }
    update(id, section) {
        return axios.put(`${API}/${id}`, section)
    }
    delete(id) {
        return axios.delete(`${API}/${id}`)
    }
    update(id, data) {
        return axios.patch(`${API}/${id}`, data)
    }
}
