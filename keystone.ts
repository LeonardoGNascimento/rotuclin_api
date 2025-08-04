import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { session, withAuth } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "mysql",
      url: "mysql://root:a2io9wqjxcd9a5ai@69.62.86.212:3306/rotuclin",
      prismaSchemaPath: "./schema.prisma",
    },
    storage: {
      my_S3_images: {
        kind: "s3",
        type: "image",
        bucketName: "public",
        region: "us-east-1",
        accessKeyId: "minioadmin",
        secretAccessKey: "wo6623kbarrpkqnf",
        signed: { expiry: 5000 },
        endpoint: "https://api-minio.rotuclin.com.br",
        forcePathStyle: true,
      },
    },
    server: {
      cors: {
        origin: [
          "http://localhost:8080",
          "https://rotuclin.com.br",
          "https://www.rotuclin.com.br",
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
      },
    },
    lists,
    session,
  })
);
