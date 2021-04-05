import NodeMediaServer from "node-media-server"

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: "*",
  },
  relay: {
    ffmpeg: "/usr/bin/ffmpeg",
    tasks: [
      {
        app: "live",
        mode: "push",
        edge: "rtmp://127.0.0.1:1936",
      },
      {
        app: "live",
        mode: "push",
        edge: "rtmp://127.0.0.1:1937",
      },
    ],
  },
}

const nms = new NodeMediaServer(config)
nms.run()
