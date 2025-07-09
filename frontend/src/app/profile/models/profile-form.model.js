export function createProfileModel(data = {}) {
    return {
        userId:      data.userId      || null,
        firstName:   data.firstName   || '',
        lastName:    data.lastName    || '',
        birthDate:   data.birthDate   || '',
        phoneNumber: data.phoneNumber || '',
        bio:         data.bio         || '',
        avatarUrl:   data.avatarUrl   || '',
        role:        data.role        || '',
    };
}