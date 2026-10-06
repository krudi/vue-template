export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:response', (response, { event }) => {
        delete response.headers?.['x-powered-by'];
        removeResponseHeader(event, 'x-powered-by');
    });
});
