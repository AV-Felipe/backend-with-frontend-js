// view: https://pm2.keymetrics.io/docs/usage/application-declaration/
//cwd is the path to each package.json when not in the same folder as this script
//script is the module we are going to start (in relation to the cwd provided path)
//name is the name listed in pm2 and watch sets auto reload when we edit any project file

module.exports = {
  apps: [
    {
      script: 'index.js',
      cwd: '/home/felipe/Documents/aulas/js/aula-29/code/frontend',
      name: 'frontend',
      watch: true
    },
    {
      script: 'index.js',
      cwd: '/home/felipe/Documents/aulas/js/aula-29/code/backend',
      name: 'backend',
      watch: true
    }
  ]
}

// USEFUL PM2 COMMANDS
/*

view: https://pm2.keymetrics.io/docs/usage/process-management/

start project : pm2 start ecosystem.config.js
restart all applications: pm2 restart all
restart applicationA: pm2 restart applicationA
to stop all applications: pms stop all
to stop and delete all running applications: pm2 delete all
to show all loaded applications: pm2 list / pm2 status / pm2 ls
to see a terminal dashboard of applications loaded: pm2 monit

*/