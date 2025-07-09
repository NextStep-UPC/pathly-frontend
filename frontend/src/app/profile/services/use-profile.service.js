import { ref } from 'vue';
import { profileService } from './profile.service';

export function useProfile() {
    const profile = ref(null);
    const loading = ref(false);
    const error   = ref(null);

    async function load() {
        loading.value = true;
        error.value   = null;
        try {
            profile.value = await profileService.getMe();
        } catch (e) {
            error.value = e.response?.data?.message || e.message;
        } finally {
            loading.value = false;
        }
    }

    async function save(updated) {
        loading.value = true;
        error.value   = null;
        try {
            profile.value = await profileService.update(updated);
        } catch (e) {
            error.value = e.response?.data?.message || e.message;
        } finally {
            loading.value = false;
        }
    }

    return { profile, loading, error, load, save };
}