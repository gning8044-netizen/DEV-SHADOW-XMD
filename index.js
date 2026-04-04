import { Bot } from './dist/bot.js';
import config from './dist/config.js';
import { logger } from './dist/utils/logger.js';
import { SessionManager } from './dist/core/SessionManager.js';
// Gestionnaire d'erreurs non capturées
process.on('uncaughtException', (error) => {
    logger.error({
        error,
        type: "FATAL_ERROR",
        context: "UNCAUGHT_EXCEPTION",
        timestamp: new Date().toISOString()
    }, "Uncaught exception - logging and continuing");
    console.error('Erreur non capturée (Process will NOT exit) :', error);
});
process.on('unhandledRejection', (reason, promise) => {
    logger.error({
        reason,
        promise,
        type: "FATAL_ERROR",
        context: "UNHANDLED_REJECTION",
        timestamp: new Date().toISOString()
    }, "Unhandled promise rejection - potential bot crash");
    console.error('Rejet de promesse non géré :', reason);
});
// Lancer tous les bots via le SessionManager
SessionManager.startAll()
    .then(() => {
    logger.info("Tous les bots ont été initialisés.");
})
    .catch((error) => {
    logger.error({
        error,
        type: "FATAL_ERROR",
        context: "SESSION_MANAGER_CRASH",
        timestamp: new Date().toISOString()
    }, "Erreur fatale lors du démarrage du SessionManager");
    console.error('Erreur lors du démarrage du SessionManager :', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map