const baseUrl = '/api/userprofile'

export const getVideosByUserId = (id) => {
    return fetch(`${baseUrl}/getwithvideos/${id}`).then((res) => res.json());
  };