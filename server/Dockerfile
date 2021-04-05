FROM node:alpine

ENV HOME /usr/src/app/

WORKDIR ${HOME}

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz \
 && tar -xJf ffmpeg-release-amd64-static.tar.xz \
 && rm -rf ffmpeg-release-amd64-static.tar.xz \
 && mv ffmpeg-4.3.2-amd64-static/ffmpeg ffmpeg-4.3.2-amd64-static/ffprobe /usr/bin/

COPY package.json yarn.lock /

RUN yarn install --production && yarn cache clean

COPY . .

CMD [ "yarn", "start" ]