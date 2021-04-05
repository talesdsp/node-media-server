import NodeMediaServer from "node-media-server"

const config = {
  rtmp: {
    port: 1936,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8001,
    allow_origin: "*",
  },
}

const nms = new NodeMediaServer(config)
nms.run()
