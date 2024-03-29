// eslint-disable-next-line import/prefer-default-export
export const reRender = async (component, domElement) => {
    console.log("componet", component);
    console.log("domElement", document.querySelector(domElement));
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if (component.afterRender) await component.afterRender();
};