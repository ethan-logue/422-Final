FROM node:22.15.0

VOLUME /inbound
VOLUME /outbound
VOLUME /processed

WORKDIR /422-final
COPY package.json /422-final/package.json
RUN npm install
COPY /src /422-final/src

CMD node src/service.js --inbound /inbound --outbound /outbound --processed /processed