import { defineStore } from 'pinia';
import { sessionService } from '../services/session.service';

export const useSessionStore = defineStore('session', {
    state: () => ({
        sessions: [],
        loading: false,
        error: null,
    }),

    getters: {
        hasSessions: (state) => state.sessions.length > 0,
    },

    actions: {
        async fetchMySessions() {
            this.loading = true;
            try {
                const data = await sessionService.mySessions();
                this.sessions = data;
                this.error = null;
            } catch (err) {
                console.error('Error al obtener sesiones del usuario:', err);
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        async fetchByState(state) {
            this.loading = true;
            try {
                const data = await sessionService.listByState(state);
                this.sessions = data;
                this.error = null;
            } catch (err) {
                console.error(`Error al obtener sesiones con estado ${state}:`, err);
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        async cancelSession(id, reason) {
            try {
                await sessionService.cancel(id, { reason });
                await this.fetchMySessions();
            } catch (err) {
                console.error('Error al cancelar sesión:', err);
            }
        },

        async confirmSession(id) {
            try {
                await sessionService.assign(id);
                await this.fetchMySessions();
            } catch (err) {
                console.error('Error al confirmar sesión:', err);
            }
        },

        async finishSession(id) {
            try {
                await sessionService.finish(id);
                await this.fetchMySessions();
            } catch (err) {
                console.error('Error al finalizar sesión:', err);
            }
        },
    },
});