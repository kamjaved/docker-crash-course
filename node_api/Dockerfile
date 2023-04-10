# 1st Layer it will create an runtime enviroment where the app will start 
FROM node:17-alpine 

RUN npm install -g nodemon 
# for our convininece we used a constant of work directory after that all command 
# will execute under this folder 
WORKDIR /app
# 2nd Layer the source code the first dot . indicate whre to copy from if 
# our codebase were under src folder then we have to write ./src
# and second dot indicate the path where code will be copy inside docker image.
# in our case it's /app as we decalre this const above 
COPY . .

# 3rd Layer Install dependencies: for these we use RUN cmd but it will install 
# dependencies on root folder where maybe different file presnent or maybe it 
# could not find our package.json because it inside ./app folder so to solve this 
# thats why we use WORKDIR 

RUN npm install 

# 4th Layer Run Command: after runnning the cntainer we need to start app.js folder to run our app and to do this 
# we use CMD because in docker CMD only run when container started running we do not to run this 
# simusltaniously with instating dependencies thats why we not use RUN command 
CMD ["npm", "run", "start"]


# Define the network ports that this container will listen on at runtime. thsis optional 
EXPOSE 5000

