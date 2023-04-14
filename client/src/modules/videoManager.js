const baseUrl = '/api/video'

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const searchVideo = (q) => {
  return fetch(baseUrl + `/search?q=${q}&sortDesc=true`)
    .then((res) => res.json())
}

export const getVideo = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

