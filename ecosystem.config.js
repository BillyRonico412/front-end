module.exports = {
  apps : [{
    script: 'nodemon app.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '92.222.181.72',
      ref  : 'origin/main',
      repo : 'https://github.com/BillyRonico412/front-end.git',
      path : '/home/ubuntu/nodeJS',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
