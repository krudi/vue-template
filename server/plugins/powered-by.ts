export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:response', (_response, { event }) => {
        removeResponseHeader(event, 'x-powered-by');
    });
});
