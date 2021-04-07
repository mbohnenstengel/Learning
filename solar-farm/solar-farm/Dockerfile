FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
# copies everything over to container
COPY solar-farm-node-express-starter/ .
# RUN adduser -S app
RUN npm install && npm cache clean --force 
# COPY C:\Users\mbohn\Documents\DEVOPS\devops-training\M01\projects\solar-farm\solar-farm-node-express-starter\node_modules\per-env\bin\per-env  opt/app/solar-farm-node-express-starter/node_modules/per-env/bin/per-env
# RUN chown -R app /opt/app
# USER app
EXPOSE 8080
#command to run the container - inside container
CMD ["npm", "start"]


