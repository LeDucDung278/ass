import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const add = (product) => {
    const url = "/products";
    return instance.post(url, product);
};

export const del = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};