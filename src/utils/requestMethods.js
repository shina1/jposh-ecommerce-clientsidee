import axios from "axios"

const BASE_URL = "http://localhost:2600/api/v1/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDg4YjAxZWI4Y2RkNmZhMTFlMzUwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTQ4Nzk0MywiZXhwIjoxNjUyMDc5OTQzfQ.mbYfb0irjA95yozWzzVRJUYG1aItCy0yzqRZEB7Ck9g"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})


