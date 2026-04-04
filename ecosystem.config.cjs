module.exports = {
  apps: [{
    name: "whatsapp-bot-cluster",
    script: "./dist/index.js", // Assurez-vous que le code est compilé dans dist/
    instances: "max",           // Utilise tous les coeurs CPU disponibles (ou mettre un chiffre ex: 4)
    exec_mode: "cluster",       // Mode cluster pour répartir la charge
    env: {
      NODE_ENV: "production",
      TOTAL_SHARDS: "4"         // IMPORTANT: Doit correspondre au nombre d'instances (ou être géré dynamiquement)
    },
    // Redémarrage automatique en cas de crash
    max_memory_restart: "1G",   // Redémarre si une instance dépasse 1Go RAM
    exp_backoff_restart_delay: 100,
    kill_timeout: 5000,          // Donne 5s au bot pour s'arrêter proprement
    listen_timeout: 5000         // Délai d'écoute
  }]
};
